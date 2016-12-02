import {
	SET_LIABILITY_RATIO,
	RESET_LIABILITY_RATIO,
} from './types';

const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

export const setLiabilityRatio = (ratio) => ({
	type: SET_LIABILITY_RATIO,
	ratio: clamp(Number(ratio), 0, 1),
});

export const resetLiabilityRatio = () => ({
	type: RESET_LIABILITY_RATIO,
});
