import React, { PropTypes } from 'react';

import {
	detailsValue,
} from './styles';

const Editable = ({ value, ...props }) => (
	<input
		type="text"
		defaultValue={ value }
		{ ...props }
	/>
);

const Noneditable = ({ value, ...props }) => (
	<span { ...props }>{ value }</span>
);

const InterceptDetailValue = ({
	editable,
	value,
	...props,
}) => {
	let childElement;
	if (editable) {
		childElement = <Editable value={ value } { ...props } />;
	} else {
		childElement = <Noneditable value={ value } { ...props } />;
	}
	return (
		<div className={ detailsValue }>
			{ childElement }
		</div>
	);
};

InterceptDetailValue.propTypes = {
	editable: PropTypes.bool,
	value: PropTypes.any,
};

InterceptDetailValue.defaultProps = {
	editable: false,
};

export default InterceptDetailValue;
