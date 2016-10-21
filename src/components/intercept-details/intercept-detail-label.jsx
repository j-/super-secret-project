import React from 'react';

import {
	detailsLabel,
} from './styles';

const InterceptDetailLabel = ({ ...props }) => (
	<div className={ detailsLabel }>
		<strong { ...props } />
	</div>
);

export default InterceptDetailLabel;
