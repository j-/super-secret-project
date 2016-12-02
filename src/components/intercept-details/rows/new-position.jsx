import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'How much risk the host will take on, including this bet'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>New position</Label>
		<Value value={ value } editable alignRight />
	</Row>
);
