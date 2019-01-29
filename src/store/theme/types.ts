import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { ActionType } from "typesafe-actions";
import * as themeActions from "./actions";

export interface ThemeState extends ThemeOptions {}

export type ThemeAction = ActionType<typeof themeActions>;
