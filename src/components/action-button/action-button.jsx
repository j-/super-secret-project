import React, { PropTypes } from 'react';

const ActionButton = ({ variant, ...props }) => {
	return <button { ...props } />;
};

ActionButton.propTypes = {
	variant: PropTypes.oneOf([
		'accept',
		'partial',
		'reject',
	]),
};

ActionButton.defaultProps = {
	variant: 'accept',
};

export default ActionButton;
