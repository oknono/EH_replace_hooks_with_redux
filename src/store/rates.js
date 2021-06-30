import { getExchangeRates } from "../api";

const initialState = {
    amount: "42.00",
    currencyCode: "USD",
    currencyData: { USD: 1.0 },
};

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case AMOUNT_CHANGED:
            return { ...state, amount: action.payload }
        case CURRENCY_CODE_CHANGED:
            return { ...state, currencyCode: action.payload }
        case RATES_RECEIVED:
            return { ...state, currencyData: action.payload }
        default:
            return state;
    }
}

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

//action types
export const AMOUNT_CHANGED = "rates/amountChanged";
export const CURRENCY_CODE_CHANGED = "rates/currencyCodeChanged";
export const RATES_RECEIVED = "rates/ratesReceived";

//action creators
export const changeAmount = (amount) => ({
    type: AMOUNT_CHANGED,
    payload: amount
});

export function changeCurrencyCode(code) {
    return function changeCurrencyCodeThunk(dispatch) {
        dispatch({
            type: CURRENCY_CODE_CHANGED,
            payload: code
        });
        getExchangeRates(code, supportedCurrencies).then((rates) => {
            dispatch({
                type: RATES_RECEIVED,
                payload: rates
            })
        });
    }
};

// thunks
export function getIntialRates(dispatch, getState) {
    const state = getState();
    const currencyCode = getCurrencyCode(state);
    dispatch(changeCurrencyCode(currencyCode));
}
