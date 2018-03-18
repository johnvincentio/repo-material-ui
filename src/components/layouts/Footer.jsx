/*
https://material-ui-next.com/demos/tabs/
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.onIndexSelect = this.onIndexSelect.bind(this);
	}

	onIndexSelect(e, idx) {
		this.props.onSelect(idx === 0 ? '' : this.props.muscles[idx - 1]);
	}

	render() {
		const { muscles, category } = this.props;
		const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
		return (
			<Paper>
				<Tabs
					value={index}
					onChange={this.onIndexSelect}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="All" />
					{muscles.map(group => <Tab key={group} label={group} />)}
				</Tabs>
			</Paper>
		);
	}
}

export default Footer;
