import React, { PropTypes } from 'react';
import Editable from './value-editable';
import Noneditable from './value-noneditable';

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
