import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// import DevTools from './DevTools';

import Main from './Main';
// import App from '../components/App';

const Root = ({ store }) => (
	<Provider store={store}>
		<div>
			{' '}
			{/* comment */}
			<Switch>
				<Route path="/" component={Main} />
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
