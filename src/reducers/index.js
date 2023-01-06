import { combineReducers } from "redux";
import { USER_LOGOUT } from "../constant/actionTypes";
import user from './user';
import orders from './orders'
import auth from './auth';

const reducers = combineReducers({
    user,
    orders,
    auth,
})

const rootReducers = (state, action) => {
    if(action.type === USER_LOGOUT){
        state= undefined;
    }

    return reducers(state, action);

}

export default rootReducers