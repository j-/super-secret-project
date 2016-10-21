import React from 'react';
import BetType from './bet-type';
import NoOfBets from './no-of-bets';
import BetCost from './bet-cost';
import Odds from './odds';
import Payout from './payout';
import Liability from './liability';
import CurrentPosition from './current-position';
import NewPosition from './new-position';
import LiabilityRatio from './liability-ratio';

const InterceptDetailsRows = () => (
	<div>
		<BetType />
		<NoOfBets />
		<BetCost />
		<Odds />
		<Payout />
		<Liability />
		<CurrentPosition />
		<NewPosition />
		<LiabilityRatio />
	</div>
);

export default InterceptDetailsRows;
