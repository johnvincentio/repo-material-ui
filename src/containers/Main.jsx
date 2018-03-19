import React from 'react';
import { cyan500 } from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';

import App from '../components/App';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		}
	}
});

console.log('theme ', theme);

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
	<MuiThemeProvider theme={theme}>
		<App />
		{/* <AppBar color="secondary">My AppBar</AppBar> */}
	</MuiThemeProvider>
);

export default Main;

/*
const muiTheme = {
  palette: {
    textColor: colors.grey200,
    primary1Color: '#ffce00',
    accent1Color: colors.redA200,
    accent2Color: colors.redA400,
    accent3Color: colors.redA100,
  },
  table: {
    height: 'calc(100vh - 122px)'
  },
  tableHeaderColumn: {
    fontSize: '14px'
  }
};
*/
