import React from 'react';
import ActionButton from '../action-button';

const RejectButton = ({ ...props }) => (
	<ActionButton variant="reject" { ...props } />
);

RejectButton.defaultProps = {
	children: 'Reject',
};

export default RejectButton;
