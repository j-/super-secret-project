import React, { PropTypes } from 'react';

const Editable = ({ value, ...props }) => (
	<input
		type="text"
		defaultValue={ value }
		{ ...props }
	/>
);

Editable.propTypes = {
	value: PropTypes.any,
};

export default Editable;
