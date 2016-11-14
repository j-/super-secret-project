import React, { PropTypes } from 'react';
import AcceptButton from '../accept-button';
import PartialButton from '../partial-button';

const AcceptPartialButton = ({
	partial,
	interceptId,
	onClickPartial,
	onClickAccept,
	...props,
}) => (
	partial ?
		<PartialButton onClick={ onClickPartial } { ...props } /> :
		<AcceptButton onClick={ onClickAccept } { ...props } />
);

AcceptPartialButton.propTypes = {
	partial: PropTypes.bool,
	interceptId: PropTypes.string.isRequired,
	onClickPartial: PropTypes.func.isRequired,
	onClickAccept: PropTypes.func.isRequired,
};

AcceptPartialButton.defaultProps = {
	partial: false,
};

export default AcceptPartialButton;
