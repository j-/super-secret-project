import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The type of single or multi bet that was placed'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Bet type</Label>
		<Value value={ value } />
	</Row>
);
