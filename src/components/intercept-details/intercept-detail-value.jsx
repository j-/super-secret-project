import React from 'react';

import {
	detailsValue,
} from './styles';

const InterceptDetailValue = ({ ...props }) => (
	<div className={ detailsValue }>
		<span { ...props } />
	</div>
);

export default InterceptDetailValue;
