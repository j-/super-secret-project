import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'How many individual bets there are in this ticket'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>No. of bets</Label>
		<Value value={ value } alignRight />
	</Row>
);
