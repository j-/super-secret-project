import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The total stake of all individual bets in this ticket'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Bet cost</Label>
		<Value value={ value } editable alignRight />
	</Row>
);
