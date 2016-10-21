import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

export default () => (
	<Row>
		<Label>Liability ratio</Label>
		<Value value="1.00" editable />
	</Row>
);
