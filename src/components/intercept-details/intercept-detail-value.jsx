import React, { PropTypes } from 'react';

import {
	detailsValue,
} from './styles';

const InterceptDetailValue = ({
	editable,
	value,
	...props,
}) => {
	let childElement;
	if (editable) {
		childElement = <input type="text" defaultValue={ value } { ...props } />;
	} else {
		childElement = <span { ...props }>{ value }</span>;
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
