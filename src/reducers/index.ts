import { combineReducers } from "redux";
import { latestReducer } from "./latest";
import { Latest } from "../actions";

export interface StoreState {
  latest: Latest;
}

export const reducers = combineReducers<StoreState>({
  latest: latestReducer,
});
