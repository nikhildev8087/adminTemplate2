import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute'
import { SET_LOGIN_FLAG, SET_USER_AUTHTOKEN, SET_USER_DATA, USER_LOGOUT,  } from '../constant/actionTypes'


export const setLoginFlag = (value) => {
    ProtectedRoute(value)
    return {
        type: SET_LOGIN_FLAG,
        flag:value,
    };
}

export const setLoginUserData = (value) => {
    return {
        type: SET_USER_DATA,
        userData:value,
    }
}

export const setAuthToken = (value) => {
    return{
        type:SET_USER_AUTHTOKEN,
        authtoken:value,
    }
}


export const logout = () => {
    return{
        type:USER_LOGOUT,
    }

}