import { combineReducers } from "redux";
import { AppAction, AppState } from "./app/types";
import { AppReducer } from "./app/reducer";

export interface RootState {
  app: AppState;
}

export const rootReducer = combineReducers<RootState>({
  app: AppReducer
});

export type RootAction = AppAction;
