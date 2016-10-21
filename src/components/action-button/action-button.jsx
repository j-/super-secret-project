import React, { PropTypes } from 'react';

import {
	accept as acceptClassName,
	partial as partialClassName,
	reject as rejectClassName,
} from './styles';

const ActionButton = ({ variant, ...props }) => {
	let className;
	switch (variant) {
		case 'accept':
			className = acceptClassName;
			break;
		case 'partial':
			className = partialClassName;
			break;
		case 'reject':
			className = rejectClassName;
			break;
	}
	return <button className={ className } { ...props } />;
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
