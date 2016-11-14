import React from 'react';
import InterceptDetails from '../intercept-details';
import AcceptPartialButton from '../accept-partial-button';

const App = () => (
	<div>
		<AcceptPartialButton interceptId="123" />
		<hr />
		<InterceptDetails interceptId="123" />
	</div>
);

export default App;
