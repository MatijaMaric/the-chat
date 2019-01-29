import { createStandardAction } from "typesafe-actions";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const setThemeOptions = createStandardAction("@Theme/SET_OPTIONS")<
  ThemeOptions
>();
