/*
https://material-ui-next.com/demos/tabs/
*/

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

export default props => (
	<Paper>
		<Tabs value={0} indicatorColor="primary" textColor="primary" centered>
			<Tab label="Item One" />
			<Tab label="Item Two" />
			<Tab label="Item Three" />
		</Tabs>
	</Paper>
);
