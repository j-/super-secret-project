import React from 'react';

const ResetButton = ({ ...props }) => (
	<button className="pt-button pt-large pt-minimal" { ...props }>
		Reset
	</button>
);

export default ResetButton;
