import {
	SET_LIABILITY_RATIO,
} from './types';

export const setLiabilityRatio = (ratio) => ({
	type: SET_LIABILITY_RATIO,
	ratio: Number(ratio),
});
