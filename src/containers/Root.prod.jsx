import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
import App from '../components/App';

const Root = props => {
	const { store } = props;
	return (
		<Provider store={store}>
			<div>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</div>
		</Provider>
	);
};

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
