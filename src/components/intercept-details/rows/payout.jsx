import React from 'react';
import Row from '../intercept-detail-row';
import Label from '../intercept-detail-label';
import Value from '../intercept-detail-value';

export default () => (
	<Row>
		<Label>Payout</Label>
		<Value value="275.75" editable />
	</Row>
);
