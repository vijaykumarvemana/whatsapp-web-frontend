import { applyMiddleware, compose, combineReducers, createStore } from "redux";

import authReducer from "../reducers/AuthReducer.js"

import thunk from "redux-thunk"
import authErrorReducer from "../reducers/AuthErrorReducer.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authState: authReducer,
    authError: authErrorReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))    

export default store;