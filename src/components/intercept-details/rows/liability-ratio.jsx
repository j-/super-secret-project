import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

export default ({ value }) => (
	<Row>
		<Label>Liability ratio</Label>
		<Value value={ value } editable />
	</Row>
);
