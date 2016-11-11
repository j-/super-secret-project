import React, { PropTypes } from 'react';
import Rows from './rows';

const InterceptDetails = ({ interceptId }) => (
	<Rows interceptId={ interceptId }/>
);

InterceptDetails.propTypes = {
	interceptId: PropTypes.string.isRequired,
};

export default InterceptDetails;
