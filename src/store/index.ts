import { combineReducers } from "redux";
import { AppAction, AppState } from "./app/types";
import { AppReducer } from "./app/reducer";
import { ThemeState, ThemeAction } from "./theme/types";
import { ThemeReducer } from "./theme/reducer";
import { ChatState, ChatAction } from "./chat/types";
import { ChatReducer } from "./chat/reducer";

export interface RootState {
  app: AppState;
  theme: ThemeState;
  chat: ChatState;
}

export const rootReducer = combineReducers<RootState, RootAction>({
  app: AppReducer,
  theme: ThemeReducer,
  chat: ChatReducer
});

export type RootAction = AppAction | ThemeAction | ChatAction;
