import { SET_LOGIN_FLAG, SET_USER_DATA, SET_USER_AUTHTOKEN } from "../constant/actionTypes";

const initial_state = {
    loginflag:false,
    loginUserData:null,
    authToken:null,
}

export default (state = initial_state, action) => {
    switch(action.type){
        case SET_LOGIN_FLAG:
            return {...state, loading:false, loginflag:action.flag}

        case SET_USER_DATA:
            return {...state, loading:false, loginUserData:action.userData}

        case SET_USER_AUTHTOKEN:
            return {...state, loading:false, authToken:action.authtoken}

        default :
            return {...state};
    }
}