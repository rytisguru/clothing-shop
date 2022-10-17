import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAP12Z_NvJf9M5dcpf2MWMSQx6s5Qztek",
    authDomain: "clothing-shop-a6393.firebaseapp.com",
    projectId: "clothing-shop-a6393",
    storageBucket: "clothing-shop-a6393.appspot.com",
    messagingSenderId: "159388325721",
    appId: "1:159388325721:web:e41b3fb76d08571ec91e48"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch (error) {
            console.log('Error setting user document', error.message)
        }
    }

    return userDocRef
  }