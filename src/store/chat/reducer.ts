import { ChatState } from "./types";
import { RootAction } from "..";
import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { addMessage } from "./actions";

const initialState: ChatState = {
  messages: []
};

const reducer: Reducer<ChatState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(addMessage):
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export { reducer as ChatReducer };
