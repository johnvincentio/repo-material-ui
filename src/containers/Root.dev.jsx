import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// import DevTools from './DevTools';

import App from '../components/1/App';

import NotFoundPage from '../components/NotFoundPage';
import App2 from '../components/2/App2';

const Root = ({ store }) => (
	<Provider store={store}>
		<div>
			{' '}
			{/* comment */}
			<Switch>
				<Route path="/1" component={App} />
				<Route path="/2" component={App2} />
				<Route component={NotFoundPage} />
			</Switch>
			{/* <div className="devtools">
				<DevTools />
			</div> */}
		</div>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;

/*
<Route path="/:login/:name" component={RepoPage} />
<Route path="/:login" component={UserPage} />
*/
