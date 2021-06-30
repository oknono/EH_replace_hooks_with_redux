import { createStore } from "redux";

const initialState = {
    amount: "42.00",
    currencyCode: "USD"

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "amountChanged":
            return { ...state, amount: action.payload }
        case "currencyCodeChanged":
            return { ...state, currencyCode: action.payload }
        default:
            return state;

    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());