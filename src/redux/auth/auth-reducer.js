import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { 
    // registerRequest,
    registerSuccess,
    registerError,
//     loginRequest,
    loginSuccess,
    loginError,
//     logoutRequest,
    logoutSuccess,
    logoutError,
//     getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} from './auth-actions.js';


const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: (_, __) => initialUserState,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]: (_, __) => null,
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]: (_, { payload }) => payload,
    [logoutError]: (_, { payload }) => payload,
    [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [logoutSuccess]: () => false,
    [getCurrentUserSuccess]: () => true,
    [registerError]: () => false,
    [loginError]: () => false,
    [getCurrentUserError]: () => false,
})

export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
});