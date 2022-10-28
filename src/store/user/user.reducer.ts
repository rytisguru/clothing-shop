import { AnyAction } from '@reduxjs/toolkit';
import { UserData } from './../../utils/firebase/firebase.utils';
import {
    signInSuccess,
    signOutSuccess,
    signOutFailed,
    signInFailed,
    emailSignUpFailed
} from './user.action';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: Boolean;
    readonly error: Error | null;
}

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (
    state = INITIAL_STATE,
    action: AnyAction
): UserState => {
    if (signInSuccess.match(action))
        return { ...state, currentUser: action.payload }
    if (signOutSuccess.match(action))
        return { ...state, currentUser: null };
    if (signOutFailed.match(action) || signInFailed.match(action) || emailSignUpFailed.match(action))
        return { ...state, error: action.payload };

    return state;
}