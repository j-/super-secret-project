import React, { PropTypes } from 'react';
import { Button } from '@blueprintjs/core';

const ActionButton = ({ variant, ...props }) => {
	let className;
	switch (variant) {
		case 'accept':
			className = 'pt-intent-success';
			break;
		case 'partial':
			className = 'pt-intent-warning';
			break;
		case 'reject':
			className = 'pt-intent-danger';
			break;
	}
	return <Button className={ `pt-button pt-large ${className}` } { ...props } />;
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
