import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { getIntialRates } from "./store/rates";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";

// kick start AJAX call for exchange rates before first render
store.dispatch(getIntialRates);

ReactDOM.render(
    <Provider store={store}><ExchangeRate /></Provider>,
    document.getElementById("root"));
