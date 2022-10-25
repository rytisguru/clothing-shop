import { createAction } from './../../utils/reducer/reducer';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })

//Email Sign Up
export const emailSignUpStart = (email, password, additionalDetails) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, { email, password, additionalDetails })

export const emailSignUpSuccess = (user, additionalDetails) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_SUCCESS, { user, additionalDetails } )

export const emailSignUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_FAILED, error)

//Sign In
export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)

//Sign Out
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED)