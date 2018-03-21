import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// import DevTools from './DevTools';

// import Main from './Main';
import App from '../components/App';

const Root = ({ store }) => (
	<Provider store={store}>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
		{/* <div className="devtools">
				<DevTools />
			</div> */}
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
