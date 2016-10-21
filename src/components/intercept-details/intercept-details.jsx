import React from 'react';

import {
	detailsRow,
	detailsLabel,
	detailsValue,
} from './styles';

const InterceptDetailRow = ({ ...props }) => (
	<div className={ detailsRow } { ...props } />
);

const InterceptDetailLabel = ({ ...props }) => (
	<strong className={ detailsLabel } { ...props } />
);

const InterceptDetailValue = ({ ...props }) => (
	<span className={ detailsValue } { ...props } />
);

const InterceptDetailInput = ({ ...props }) => (
	<input { ...props } />
);

const InterceptDetails = () => (
	<div>
		<InterceptDetailRow>
			<InterceptDetailLabel>Bet type</InterceptDetailLabel>
			<InterceptDetailValue>Doubles</InterceptDetailValue>
		</InterceptDetailRow>
	</div>
);

export default InterceptDetails;
