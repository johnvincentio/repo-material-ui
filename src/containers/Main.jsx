import React from 'react';
import { cyan500 } from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

import App from '../components/App';
import Classes from './Classes';
import ClassNames from './ClassNames';

import InlineStyle from './InlineStyle';

// import classes from './main.scss';

import './main.scss';

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
		},
		jv: {
			light: '#ff7961',
			main: '#9e7272',
			dark: '#ba000d',
			contrastText: '#000'
		}
	}
});

console.log('theme ', theme);

// console.log('classes ', classes);

// console.log('classes.jv ', classes.jv);
// console.log('classes.jv.width ', classes.jv.width);

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
	<MuiThemeProvider theme={theme}>
		<InlineStyle />
		<Classes />
		<ClassNames />
		<Button classes={{ root: 'main' }}>Default</Button>
		<Button classes={{ root: 'jv2' }}>JV2</Button>
		<div className="alphabetagamma">anything</div>
		<div className="delta">delta</div>
		<div className="main">jv</div>
		{/* <App /> */}
		{/* <AppBar color="primary">AppBar 1</AppBar>
		<AppBar color="secondary">AppBar 2</AppBar> */}
		{/* <AppBar classname="delta">AppBar 3</AppBar> */}
		{/* <AppBar classes={{ colorDefault: `.delta` }}>AppBar 3</AppBar> */}
	</MuiThemeProvider>
);

export default Main;

/*
		<Button classes={{ button: `jv` }} className="jv">

classes={{
  paper: `SASS_CLASS_NAME_HERE`,
}}
*/
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
