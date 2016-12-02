import {
	SET_LIABILITY_RATIO,
	RESET_LIABILITY_RATIO,
} from './types';

const DEFAULT_STATE = {
	liabilityRatio: null,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_LIABILITY_RATIO:
			return {
				...state,
				liabilityRatio: action.ratio,
			};
		case RESET_LIABILITY_RATIO:
			return {
				...state,
				liabilityRatio: null,
			};
		default:
			return state;
	}
}

export const getLiabilityRatio = (state, interceptId) => (
	state.liabilityRatio || 1
);

export const getIsInterceptModified = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) !== 1
);

export const getImmutableBetType = (state, interceptId) => 'Doubles';

export const getImmutableNoOfBets = (state, interceptId) => 3;

export const getImmutableOdds = (state, interceptId) => 14.38;

export const getImmutableCurrentPosition = (state, interceptId) => 0;

export const getOriginalBetCost = (state, interceptId) => (
	25.78
);

export const getScaledBetCost = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) *
	getOriginalBetCost(state, interceptId)
);

export const getOriginalPayout = (state, interceptId) => (
	getImmutableOdds(state, interceptId) *
	getOriginalBetCost(state, interceptId)
);

export const getScaledPayout = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) *
	getOriginalPayout(state, interceptId)
);

export const getOriginalLiability = (state, interceptId) => (
	(getImmutableOdds(state, interceptId) - 1) *
	getOriginalBetCost(state, interceptId)
);

export const getScaledLiability = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) *
	getOriginalLiability(state, interceptId)
);

export const getOriginalBetPosition = (state, interceptId) => (
	getOriginalLiability(state, interceptId) * -1
);

export const getScaledBetPosition = (state, interceptId) => (
	getScaledLiability(state, interceptId) * -1
);

export const getOriginalNewPosition = (state, interceptId) => (
	getImmutableCurrentPosition(state, interceptId) +
	getOriginalBetPosition(state, interceptId)
);

export const getScaledNewPosition = (state, interceptId) => (
	getImmutableCurrentPosition(state, interceptId) +
	getScaledBetPosition(state, interceptId)
);
