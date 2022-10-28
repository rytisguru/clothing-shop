import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: "AIzaSyBAP12Z_NvJf9M5dcpf2MWMSQx6s5Qztek",
  authDomain: "clothing-shop-a6393.firebaseapp.com",
  projectId: "clothing-shop-a6393",
  storageBucket: "clothing-shop-a6393.appspot.com",
  messagingSenderId: "159388325721",
  appId: "1:159388325721:web:e41b3fb76d08571ec91e48"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Redirect Method
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocument = async <T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(docSnapShot => docSnapShot.data() as Category)
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export type AdditionalInformation = {
  displayName?: string;
}

export const createUserDocumentFromAuth = async (userAuth: User, additionalData = {} as AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('Error setting user document', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}