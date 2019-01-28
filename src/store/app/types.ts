import * as appActions from "./actions";
import { ActionType } from "typesafe-actions";

export interface AppState {
  test: string;
}

export type AppAction = ActionType<typeof appActions>;
