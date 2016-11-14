import React, { PropTypes } from 'react';

import {
	detailsValue,
	detailsInputEditable as inputEditable,
	detailsInputNoneditable as inputNoneditable,
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
			className={ editable ? inputEditable : inputNoneditable }
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
