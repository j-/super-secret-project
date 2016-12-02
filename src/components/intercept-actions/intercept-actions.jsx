import React, { PropTypes } from 'react';
import AcceptPartialButton from '../accept-partial-button';
import RejectButton from '../reject-button';
import ResetButton from '../reset-button';

const InterceptActions = ({ isDirty, interceptId, ...props }) => (
	<div className="intercept-actions" { ...props }>
		<AcceptPartialButton style={{ width: 100 }} interceptId={ interceptId } />
		{ ' ' }
		<RejectButton style={{ width: 100 }} />
		{ ' ' }
		{ isDirty && <ResetButton /> }
	</div>
);

InterceptActions.propTypes = {
	isDirty: PropTypes.bool,
	interceptId: PropTypes.string.isRequired,
};

InterceptActions.defaultProps = {
	isDirty: false,
};

export default InterceptActions;
