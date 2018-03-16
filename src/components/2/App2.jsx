import React, { Fragment } from 'react';

// import Button from 'material-ui/Button';

// import Hello from './Hello';

import { Header, Footer } from './layouts';
import Exercises from './exercises';

export default class extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Exercises />
				<Footer />
			</Fragment>
		);
	}
}
