import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ratesReducer } from "./rates";
import { userReducer } from "./user";

const reducer = combineReducers({
    user: userReducer,
    rates: ratesReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));