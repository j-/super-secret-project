import React from 'react';
import InterceptDetailRow from '../intercept-detail-row';
import InterceptDetailLabel from '../intercept-detail-label';
import InterceptDetailValue from '../intercept-detail-value';

export default () => (
	<InterceptDetailRow>
		<InterceptDetailLabel>Bet type</InterceptDetailLabel>
		<InterceptDetailValue value="Doubles" />
	</InterceptDetailRow>
);
