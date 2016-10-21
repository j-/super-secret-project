import React, { PropTypes } from 'react';
import AcceptButton from '../accept-button';
import PartialButton from '../partial-button';

const AcceptPartialButton = ({ partial, ...props }) => (
	partial ?
		<PartialButton { ...props } /> :
		<AcceptButton { ...props } />
);

AcceptPartialButton.propTypes = {
	partial: PropTypes.bool,
};

AcceptPartialButton.defaultProps = {
	partial: false,
};

export default AcceptPartialButton;
