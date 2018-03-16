import React, { Fragment } from 'react';

import Button from 'material-ui/Button';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('>>> App; constructor');
		console.log(props);
		console.log('<<< App; constructor');
	}

	render() {
		return (
			<Fragment>
				<Button variant="raised" color="primary">
					Hello World
				</Button>
			</Fragment>
		);
	}
}

export default App;
