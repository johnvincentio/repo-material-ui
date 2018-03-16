import React from 'react';

import { AppBar, Toolbar, Typography } from 'material-ui';

export default ({ props }) => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="headline" color="inherit">
				Exercise database
			</Typography>
			<Typography variant="subheading" gutterBottom>
				Exercise database
			</Typography>
		</Toolbar>
	</AppBar>
);
