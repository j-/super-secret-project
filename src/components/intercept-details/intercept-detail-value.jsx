import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
	setLiabilityRatio,
} from '../../store/actions';

import {
	detailsValue,
} from './styles';

class InterceptDetailValue extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: this.formatValue(props),
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillReceiveProps (props) {
		if (props.value) {
			this.setState({
				value: this.formatValue(props),
			});
		}
	}

	formatValue (props) {
		const { value, decimalPlaces } = props;
		if (decimalPlaces) {
			return value.toFixed(decimalPlaces);
		} else {
			return value;
		}
	}

	handleChange (e) {
		e.preventDefault();
		this.setState({
			value: e.target.value,
		});
	}

	handleKeyPress (e) {
		if (e.which === 13) {
			e.preventDefault();
			this.sendValue();
		}
	}

	handleBlur () {
		this.sendValue();
	}

	sendValue () {
		const { value } = this.state;
		const { onChange } = this.props;
		onChange(value);
	}

	render () {
		const {
			editable,
			alignRight,
			decimalPlaces,
			...props,
		} = this.props;
		const {
			value,
		} = this.state;
		return (
			<div className={ detailsValue }>
				<input
					{ ...props }
					type="text"
					readOnly={ !editable }
					className="pt-input"
					value={ value }
					onChange={ this.handleChange }
					onKeyPress={ this.handleKeyPress }
					onBlur={ this.handleBlur }
					style={{ textAlign: alignRight ? 'right' : 'left' }}
				/>
			</div>
		);
	}
}

InterceptDetailValue.propTypes = {
	editable: PropTypes.bool,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	alignRight: PropTypes.any,
	decimalPlaces: PropTypes.number,
};

InterceptDetailValue.defaultProps = {
	editable: false,
	alignRight: false,
};

const mapDispatchToProps = {
	onChange: setLiabilityRatio,
};

export default connect(
	null,
	mapDispatchToProps
)(InterceptDetailValue);
