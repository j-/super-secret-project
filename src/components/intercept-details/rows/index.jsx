import React, { PropTypes } from 'react';
import * as selectors from '../../../store';
import { connect } from 'react-redux';

import BetType from './bet-type';
import NoOfBets from './no-of-bets';
import BetCost from './bet-cost';
import Odds from './odds';
import Payout from './payout';
import Liability from './liability';
import CurrentPosition from './current-position';
import BetPosition from './bet-position';
import NewPosition from './new-position';
import LiabilityRatio from './liability-ratio';

const InterceptDetailsRows = ({ ...props }) => (
	<div>
		<BetType value={ props.betType } />
		<NoOfBets value={ props.noOfBets } />
		<BetCost value={ props.betCost } />
		<Odds value={ props.odds } />
		<Payout value={ props.payout } />
		<Liability value={ props.liability } />
		<CurrentPosition value={ props.currentPosition } />
		<BetPosition value={ props.betPosition } />
		<NewPosition value={ props.newPosition } />
		<LiabilityRatio value={ props.liabilityRatio } />
	</div>
);

InterceptDetailsRows.propTypes = {
	interceptId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { interceptId }) => ({
	betType: selectors.getBetType(state, interceptId),
	noOfBets: selectors.getNoOfBets(state, interceptId),
	betCost: selectors.getBetCost(state, interceptId),
	odds: selectors.getOdds(state, interceptId),
	payout: selectors.getPayout(state, interceptId),
	liability: selectors.getLiability(state, interceptId),
	currentPosition: selectors.getCurrentPosition(state, interceptId),
	betPosition: selectors.getBetPosition(state, interceptId),
	newPosition: selectors.getNewPosition(state, interceptId),
	liabilityRatio: selectors.getLiabilityRatio(state, interceptId),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InterceptDetailsRows);
