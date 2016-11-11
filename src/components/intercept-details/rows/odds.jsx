import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

export default ({ value }) => (
	<Row>
		<Label>Odds</Label>
		<Value value={ value } />
	</Row>
);
