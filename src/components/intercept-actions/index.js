import InterceptActions from './intercept-actions';
import { connect } from 'react-redux';

import {
	getIsInterceptModified,
} from '../../store';

const mapStateToProps = (state, { interceptId }) => ({
	isDirty: getIsInterceptModified(state, interceptId),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InterceptActions);
