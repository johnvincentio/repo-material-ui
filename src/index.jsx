import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';

import { baseTheme } from './themes/theme';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

console.log('baseTheme ', baseTheme);
console.log(`API_KEY ${process.env.API_KEY}`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<MuiThemeProvider theme={baseTheme}>
			<Router>
				<Root store={store} />
			</Router>
		</MuiThemeProvider>,
		document.getElementById('root')
	);
});
