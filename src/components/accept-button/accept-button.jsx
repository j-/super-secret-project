import React from 'react';
import ActionButton from '../action-button';

const AcceptButton = ({ ...props }) => (
	<ActionButton variant="accept" { ...props } />
);

AcceptButton.defaultProps = {
	children: 'Accept',
};

export default AcceptButton;
