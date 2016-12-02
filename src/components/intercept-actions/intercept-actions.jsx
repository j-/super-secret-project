import React from 'react';
import AcceptPartialButton from '../accept-partial-button';
import RejectButton from '../reject-button';
import ResetButton from '../reset-button';

const InterceptActions = ({ interceptId, ...props }) => (
	<div className="intercept-actions" { ...props }>
		<AcceptPartialButton style={{ width: 100 }} interceptId={ interceptId } />
		{ ' ' }
		<RejectButton style={{ width: 100 }} />
		{ ' ' }
		<ResetButton />
	</div>
);

export default InterceptActions;
