import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'How much the host pays out for this bet if it wins'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Payout</Label>
		<Value value={ value } editable alignRight />
	</Row>
);
