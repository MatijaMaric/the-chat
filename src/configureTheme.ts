import { Theme, colors } from "@material-ui/core";
import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme";

const darkTheme: ThemeOptions = {
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

const lightTheme: ThemeOptions = {};

export default function configureTheme(dark: boolean = true): Theme {
  return createMuiTheme(dark ? darkTheme : lightTheme);
}
