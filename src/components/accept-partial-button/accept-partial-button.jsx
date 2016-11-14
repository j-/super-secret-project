import React, { PropTypes } from 'react';
import AcceptButton from '../accept-button';
import PartialButton from '../partial-button';

const AcceptPartialButton = ({
	partial,
	interceptId,
	partialIntercept,
	acceptIntercept,
	...props,
}) => (
	partial ?
		<PartialButton onClick={ partialIntercept } { ...props } /> :
		<AcceptButton onClick={ acceptIntercept } { ...props } />
);

AcceptPartialButton.propTypes = {
	partial: PropTypes.bool,
	interceptId: PropTypes.string.isRequired,
	partialIntercept: PropTypes.func.isRequired,
	acceptIntercept: PropTypes.func.isRequired,
};

AcceptPartialButton.defaultProps = {
	partial: false,
};

export default AcceptPartialButton;
