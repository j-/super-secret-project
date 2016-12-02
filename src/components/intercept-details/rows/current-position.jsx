import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

const title = (
	'How much risk the host has taken on, excluding this bet'
);

export default ({ value }) => (
	<Row title={ title }>
		<Label>Current position</Label>
		<Value value={ value } alignRight decimalPlaces={ 2 } />
	</Row>
);
