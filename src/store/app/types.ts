import * as appActions from "./actions";
import { ActionType } from "typesafe-actions";

export interface AppState {
  isAuthenticated: boolean;
  displayName?: string;
  avatarURL?: string;
}

export type AppAction = ActionType<typeof appActions>;
