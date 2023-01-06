import { applyMiddleware, compose, createStore } from "redux";

import { ThunkMiddleware } from "redux-thunk";
import logger from "redux-logger";
import { loadState } from "./localstorage";

import reducers from "../reducers/index";

function saveToLocalStorage(state) {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        return undefined
    }
}

let persitedState = loadState();

const store  = createStore(reducers, persitedState, compose(
    applyMiddleware(ThunkMiddleware, logger),

    window.devToolsExtension ? window.devToolsExtension() : function (f){
        return f;
    }
));

const unsubscribe = store.subscribe(()=> {
    const state = store.getState();
    saveToLocalStorage(state);
})

export default store;

