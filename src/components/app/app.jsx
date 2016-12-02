import React from 'react';
import InterceptActions from '../intercept-actions';
import InterceptDetails from '../intercept-details';

const App = () => (
	<div>
		<InterceptActions interceptId="123" />
		<hr />
		<InterceptDetails interceptId="123" />
	</div>
);

export default App;
