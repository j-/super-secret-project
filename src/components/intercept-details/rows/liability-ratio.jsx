import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The "expected:actual" liability ratio that scales the amount this bet ' +
	'will be accepted at where 1 = full stake, 0.5 = half stake etc.'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Liability ratio</Label>
		<Value value={ value } editable alignRight />
	</Row>
);
