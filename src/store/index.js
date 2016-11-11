export default (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const getBetType = (state, interceptId) => 'Doubles';

export const getNoOfBets = (state, interceptId) => 3;

export const getOdds = (state, interceptId) => 14.38;

export const getBetCost = (state, interceptId) => (
	getLiabilityRatio(state, interceptId) * 25.78
);

export const getPayout = (state, interceptId) => (
	getOdds(state, interceptId) * getBetCost(state, interceptId)
);

export const getLiability = (state, interceptId) => (
	(getOdds(state, interceptId) - 1) * getBetCost(state, interceptId)
);

export const getCurrentPosition = (state, interceptId) => 0;

export const getBetPosition = (state, interceptId) => (
	getLiability(state, interceptId) * -1
);

export const getNewPosition = (state, interceptId) => (
	getCurrentPosition(state, interceptId) +
	getBetPosition(state, interceptId)
);

const RATIO = Math.random();
export const getLiabilityRatio = (state, interceptId) => RATIO;
