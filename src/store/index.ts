import { combineReducers } from "redux";
import { AppAction, AppState } from "./app/types";
import { AppReducer } from "./app/reducer";
import { ThemeState, ThemeAction } from "./theme/types";
import { ThemeReducer } from "./theme/reducer";

export interface RootState {
  app: AppState;
  theme: ThemeState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  app: AppReducer,
  theme: ThemeReducer
});

export type RootAction = AppAction | ThemeAction;
