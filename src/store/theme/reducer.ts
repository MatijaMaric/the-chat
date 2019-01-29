import { ThemeState } from "./types";
import { colors } from "@material-ui/core";
import { Reducer } from "redux";
import { setThemeOptions } from "./actions";
import { getType } from "typesafe-actions";
import { RootAction } from "..";

const initialState: ThemeState = {
  palette: {
    type: "dark",

    primary: {
      main: colors.blueGrey["800"]
    },
    secondary: {
      main: colors.amber["700"]
    }
  }
};

const reducer: Reducer<ThemeState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(setThemeOptions): {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export { reducer as ThemeReducer };
