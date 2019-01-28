import { AppState, AppAction } from "./types";
import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { initializeApp } from "./actions";

const initialState: AppState = {
  isAuthenticated: false
};

const reducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer as AppReducer };
