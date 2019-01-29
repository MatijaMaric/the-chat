import { AppState } from "./types";
import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { setAuthState } from "./actions";
import { RootAction } from "..";

const initialState: AppState = {
  isAuthenticated: false
};

const reducer: Reducer<AppState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(setAuthState):
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        displayName: action.payload.displayName,
        avatarURL: action.payload.photoURL
      };
    default:
      return state;
  }
};

export { reducer as AppReducer };
