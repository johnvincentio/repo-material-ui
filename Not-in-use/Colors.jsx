import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

// Styles
import 'material-grid/dist/css/material-grid.css';
import './styles/main.scss';

// Containers
import App from './containers/App';

const theme = createMuiTheme({
	appBar: {
		color: Colors.cyan400,
		textColor: Colors.white
	},
	palette: {
		primary1Color: Colors.cyan500,
		primary2Color: Colors.blueGrey700,
		accent1Color: Colors.deepOrange500,
		accent2Color: Colors.blueGrey400,
		accent3Color: Colors.blueGrey500
	},
	cardMedia: {
		overlayContentBackground: fade(Colors.darkBlack, 0.87)
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('app')
);
