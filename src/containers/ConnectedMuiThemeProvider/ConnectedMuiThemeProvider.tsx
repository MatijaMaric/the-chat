import React from "react";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

export interface ConnectedMuiThemeProviderStateProps {
  theme: ThemeOptions;
}

function mapStateToProps(
  state: RootState
): ConnectedMuiThemeProviderStateProps {
  return {
    theme: state.theme
  };
}

class ConnectedMuiThemeProvider extends React.Component<
  ConnectedMuiThemeProviderStateProps
> {
  public render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(this.props.theme)}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(ConnectedMuiThemeProvider);
