import ResetButton from './reset-button';
import { connect } from 'react-redux';

import {
	resetLiabilityRatio
} from '../../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = {
	onClick: resetLiabilityRatio,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton);
