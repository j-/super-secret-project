import React, { PropTypes } from 'react';

const Noneditable = ({ value, ...props }) => (
	<span { ...props }>{ value }</span>
);

Noneditable.propTypes = {
	value: PropTypes.any,
};

export default Noneditable;
