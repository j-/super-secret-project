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
		<PartialButton
			title="Accept this bet with less than full stake"
			onClick={ onClickPartial }
			{ ...props }
		/> :
		<AcceptButton
			title="Accept this bet at full stake"
			onClick={ onClickAccept }
			{ ...props }
		/>
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
