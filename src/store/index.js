export default (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const getImmutableBetType = (state, interceptId) => 'Doubles';

export const getImmutableNoOfBets = (state, interceptId) => 3;

export const getImmutableOdds = (state, interceptId) => 14.38;

export const getImmutableCurrentPosition = (state, interceptId) => 0;

export const getBetCost = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) * 25.78
);

export const getPayout = (state, interceptId) => (
	getImmutableOdds(state, interceptId) * getBetCost(state, interceptId)
);

export const getLiability = (state, interceptId) => (
	(getImmutableOdds(state, interceptId) - 1) * getBetCost(state, interceptId)
);

export const getBetPosition = (state, interceptId) => (
	getLiability(state, interceptId) * -1
);

export const getNewPosition = (state, interceptId) => (
	getImmutableCurrentPosition(state, interceptId) +
	getBetPosition(state, interceptId)
);

const RATIO = Math.random();
export const getLiabilityRatio = (state, interceptId) => RATIO;
