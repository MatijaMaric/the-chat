import { ActionType } from "typesafe-actions";
import * as chatActions from "./actions";

export interface ChatState {
  messages: Array<string>;
}

export type ChatAction = ActionType<typeof chatActions>;
