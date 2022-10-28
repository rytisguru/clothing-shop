import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';
import { UserData, AdditionalInformation } from './../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

// Check User Session /////
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher(
    (): CheckUserSession =>
        createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);
///////////////////////////

// Google SignIn Start ////
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const googleSignInStart = withMatcher(
    (): GoogleSignInStart =>
        createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);
//////////////////////////

// Email SignIn Start ////
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>

export const emailSignInStart = withMatcher(
    (email: string, password: string): EmailSignInStart =>
        createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);
//////////////////////////

//////////////////////////
// Email Sign Up /////////
//////////////////////////
// Email SignUp Start ////
export type EmailSignUpStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_UP_START, { email: string, password: string, displayName: string }>

export const emailSignUpStart = withMatcher(
    (email: string, password: string, displayName: string): EmailSignUpStart =>
        createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, { email, password, displayName })
);
//////////////////////////

// Email SignUp Success //
export type EmailSignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, { user: User, additionalDetails: AdditionalInformation }>

export const emailSignUpSuccess = withMatcher(
    (user: User, additionalDetails: AdditionalInformation): EmailSignUpSuccess =>
        createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, { user, additionalDetails })
);
//////////////////////////

// Email SignUp Failed ///
export type EmailSignUpFailed = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_UP_FAILED, Error>

export const emailSignUpFailed = withMatcher(
    (error: Error): EmailSignUpFailed =>
        createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_FAILED, error)
);
//////////////////////////

//////////////////////////
// Sign In ///////////////
//////////////////////////
// SingIn Success ////////
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export const signInSuccess = withMatcher(
    (user: UserData & { id: string }): SignInSuccess =>
        createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);
//////////////////////////

// SignIn Failed /////////
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export const signInFailed = withMatcher(
    (error: Error): SignInFailed =>
        createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);
//////////////////////////

//////////////////////////
// Sign Out //////////////
//////////////////////////
// SignOut Start /////////
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export const signOutStart = withMatcher(
    (): SignOutStart =>
        createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);
//////////////////////////

// SignOut Success ///////
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export const signOutSuccess = withMatcher(
    (): SignOutSuccess =>
        createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);
//////////////////////////

// SignOut Failed ////////
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const signOutFailed = withMatcher(
    (error: Error): SignOutFailed =>
        createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
//////////////////////////