import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The risk of taking on this bet'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Bet position</Label>
		<Value value={ value } editable alignRight />
	</Row>
);
