import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The total price for all bets in this ticket'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Odds</Label>
		<Value value={ value } alignRight decimalPlaces={ 2 } />
	</Row>
);
