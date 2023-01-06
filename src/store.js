import { createStore } from "redux";

const initial_state = {
    sidebarshow: true,
}

const changeState = (state = initial_state, {type, ...rest}) => {
    switch(type) {
        case 'set' :
            return {...state, ...rest}
        default:
            return state
    }
}

const store = createStore(changeState)

export default store













