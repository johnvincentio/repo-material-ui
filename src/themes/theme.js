import { createMuiTheme } from 'material-ui/styles';

import purple from 'material-ui/colors/purple';
import blue from 'material-ui/colors/blue';
import cyan from 'material-ui/colors/cyan';

export const baseTheme = createMuiTheme({
	palette: {
		primary: { main: purple[500] },
		secondary: { main: cyan[500] }
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});

export const baseThemeSave = createMuiTheme({
	palette: {
		primary: { main: blue[500] },
		secondary: { main: cyan[500] }
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});

export const theme = createMuiTheme({
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});
