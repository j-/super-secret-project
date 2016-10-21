import React from 'react';
import ActionButton from '../action-button';

const PartialButton = ({ ...props }) => (
	<ActionButton variant="partial" { ...props } />
);

PartialButton.defaultProps = {
	children: 'Partial',
};

export default PartialButton;
