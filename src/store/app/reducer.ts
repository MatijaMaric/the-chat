import { AppState, AppAction } from "./types";
import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { initializeApp } from "./actions";

const initialState: AppState = {
  test: "test"
};

const reducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(initializeApp):
      return {
        ...state,
        test: "burek"
      };
    default:
      return state;
  }
};

export { reducer as AppReducer };
