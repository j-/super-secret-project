import React, { PropTypes } from 'react';

import {
	detailsValue,
} from './styles';

const InterceptDetailValue = ({
	editable,
	value,
	...props,
}) => (
	<div className={ detailsValue }>
		<input
			type="text"
			defaultValue={ value }
			readOnly={ !editable }
			className="pt-input"
			{ ...props }
		/>
	</div>
);

InterceptDetailValue.propTypes = {
	editable: PropTypes.bool,
	value: PropTypes.any,
};

InterceptDetailValue.defaultProps = {
	editable: false,
};

export default InterceptDetailValue;
