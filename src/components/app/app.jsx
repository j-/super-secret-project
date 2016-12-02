import React from 'react';
import InterceptDetails from '../intercept-details';
import AcceptPartialButton from '../accept-partial-button';
import RejectButton from '../reject-button';
import ResetButton from '../reset-button';

const App = () => (
	<div>
		<AcceptPartialButton interceptId="123" />
		{ ' ' }
		<RejectButton />
		{ ' ' }
		<ResetButton />
		<hr />
		<InterceptDetails interceptId="123" />
	</div>
);

export default App;
