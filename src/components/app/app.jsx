import React from 'react';
import InterceptDetails from '../intercept-details';
import AcceptPartialButton from '../accept-partial-button';
import RejectButton from '../reject-button';

const App = () => (
	<div>
		<AcceptPartialButton interceptId="123" />
		{ ' ' }
		<RejectButton />
		<hr />
		<InterceptDetails interceptId="123" />
	</div>
);

export default App;
