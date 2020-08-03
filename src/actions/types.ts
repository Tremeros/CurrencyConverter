import { FetchLatestAction, FetchExchangeAction } from "./latest";

export enum ActionTypes {
  fetchLatest,
  fetchExchange,
}

export type Action = FetchLatestAction | FetchExchangeAction;
