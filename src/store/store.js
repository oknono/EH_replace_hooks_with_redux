import { createStore, combineReducers } from "redux";
import { ratesReducer } from "./rates";
import { userReducer } from "./user";

const reducer = combineReducers({
    user: userReducer,
    rates: ratesReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());