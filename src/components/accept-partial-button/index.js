import AcceptPartialButton from './accept-partial-button';
import { connect } from 'react-redux';

import {
	getIsInterceptModified
} from '../../store';

const acceptIntercept = () => ({ type: 'INTERCEPT_ACCEPT' });
const partialIntercept = (stake) => ({ type: 'INTERCEPT_PARTIAL', stake });

const mapStateToProps = (state, { interceptId }) => ({
	partial: getIsInterceptModified(state, interceptId),
});

const mapDispatchToProps = (dispatch, { interceptId }) => ({
	acceptIntercept: () => acceptIntercept(interceptId),
	partialIntercept: (stake) => partialIntercept(interceptId, stake),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AcceptPartialButton);
