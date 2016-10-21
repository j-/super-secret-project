import React from 'react';

import {
	detailsRow,
} from './styles';

const InterceptDetailRow = ({ ...props }) => (
	<div className={ detailsRow } { ...props } />
);

export default InterceptDetailRow;
