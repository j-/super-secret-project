import React from 'react';
import AcceptButton from '../accept-button';
import PartialButton from '../partial-button';
import RejectButton from '../reject-button';
import AcceptPartialButton from '../accept-partial-button';

const TESTActionButtons = () => (
	<div>
		<AcceptButton />
		<PartialButton />
		<RejectButton />

		<hr />

		<AcceptPartialButton partial={ Math.random() > 0.5 } />
	</div>
);

export default TESTActionButtons;
