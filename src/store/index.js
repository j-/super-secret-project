export default (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const RATIO = Math.random();

export const getLiabilityRatio = (state, interceptId) => RATIO;

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
