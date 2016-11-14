import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'The amount that the host stands to lose if this bet wins'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Liability</Label>
		<Value value={ value } editable />
	</Row>
);
