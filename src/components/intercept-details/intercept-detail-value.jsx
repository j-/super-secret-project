import React, { Component, PropTypes } from 'react';

import {
	detailsValue,
} from './styles';

class InterceptDetailValue extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: props.value,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e) {
		e.preventDefault();
		this.setState({
			value: e.target.value,
		});
	}

	render () {
		const {
			editable,
			...props,
		} = this.props;
		const {
			value,
		} = this.state;
		return (
			<div className={ detailsValue }>
				<input
					type="text"
					onChange={ this.handleChange }
					readOnly={ !editable }
					className="pt-input"
					{ ...props }
					value={ value }
				/>
			</div>
		);
	}
}

InterceptDetailValue.propTypes = {
	editable: PropTypes.bool,
	value: PropTypes.any,
};

InterceptDetailValue.defaultProps = {
	editable: false,
};

export default InterceptDetailValue;
