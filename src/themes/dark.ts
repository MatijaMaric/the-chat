import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { colors } from "@material-ui/core";

const theme: ThemeOptions = {
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

export { theme as DarkTheme };
