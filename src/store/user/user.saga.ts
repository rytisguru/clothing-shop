import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import { USER_ACTION_TYPES } from "./user.types";
import { 
    signInSuccess, 
    signInFailed,
    signOutSuccess,
    signOutFailed,
    emailSignUpSuccess,
    emailSignUpFailed,
    EmailSignInStart,
    EmailSignUpStart,
    EmailSignUpSuccess
} from "./user.action";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser,
    AdditionalInformation
} from '../../utils/firebase/firebase.utils';

import { User } from 'firebase/auth';

export function* getSnapShotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
    try {
        const userSnapShot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails)
        if (userSnapShot) yield* put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signUpWithEmail({ payload: { email, password, displayName } }: EmailSignUpStart) {
    try {
        const userCrediantial = yield* call(createAuthUserWithEmailAndPassword, email, password)
        if (userCrediantial) {
            const { user } = userCrediantial
            yield* put(emailSignUpSuccess(user, { displayName }));
        }
    } catch (error) {
        yield* put(emailSignUpFailed(error as Error))
    }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
    try {
        const userCrediantial = yield* call(signInAuthUserWithEmailAndPassword, email, password)
        if (userCrediantial) {
            const { user } = userCrediantial
            yield* call(getSnapShotFromUserAuth, user)
        }
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup)
        yield* call(getSnapShotFromUserAuth, user)
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser)
        if (!userAuth) return;
        yield* call(getSnapShotFromUserAuth, userAuth)
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: EmailSignUpSuccess) {
    yield* call(getSnapShotFromUserAuth, user, additionalDetails)
}

export function* signOut() {
    try {
        yield* call(signOutUser)
        yield* put(signOutSuccess())
    } catch (error) {
        yield* put(signOutFailed(error as Error))
    }
}

export function* onEmailSignUpStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onEmailSignUpSuccess() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga() {
    yield* all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onEmailSignUpStart),
        call(onSignOutStart),
        call(onEmailSignUpSuccess)
    ])
}