import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Latest {
  date: String;
  base: String;

  rates: {
    AUD: Number;
    BGN: Number;
    BRL: Number;
    CAD: Number;
    CHF: Number;
    CNY: Number;
    CZK: Number;
    DKK: Number;
    GBP: Number;
    HKD: Number;
    HRK: Number;
    HUF: Number;
    IDR: Number;
    ILS: Number;
    INR: Number;
    ISK: Number;
    JPY: Number;
    KRW: Number;
    MXN: Number;
    MYR: Number;
    NOK: Number;
    NZD: Number;
    PHP: Number;
    PLN: Number;
    RON: Number;
    RUB: Number;
    SEK: Number;
    SGD: Number;
    THB: Number;
    TRY: Number;
    USD: Number;
    ZAR: Number;
  };
}

export interface FetchLatestAction {
  type: ActionTypes.fetchLatest;
  payload: Latest;
}

export interface FetchExchangeAction {
  type: ActionTypes.fetchExchange;
  payload: Latest;
}

// const url = "https://api.exchangeratesapi.io/latest?base=USD";

export const fetchLatest = (currency: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Latest>(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
    );

    dispatch<FetchLatestAction>({
      type: ActionTypes.fetchLatest,
      payload: response.data,
    });
  };
};

export const fetchExchange = (from: String, to: String) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`
    );

    dispatch<FetchExchangeAction>({
      type: ActionTypes.fetchExchange,
      payload: response.data,
    });
  };
};
