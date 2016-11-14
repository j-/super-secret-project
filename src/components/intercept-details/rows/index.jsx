import React, { PropTypes } from 'react';
import * as selectors from '../../../store';
import { connect } from 'react-redux';

import BetType from './bet-type';
import NoOfBets from './no-of-bets';
import Odds from './odds';
import BetCost from './bet-cost';
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
		<Odds value={ props.odds } />
		<BetCost value={ props.betCost } />
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
	betType: selectors.getImmutableBetType(state, interceptId),
	noOfBets: selectors.getImmutableNoOfBets(state, interceptId),
	odds: selectors.getImmutableOdds(state, interceptId),
	betCost: selectors.getScaledBetCost(state, interceptId),
	payout: selectors.getScaledPayout(state, interceptId),
	liability: selectors.getScaledLiability(state, interceptId),
	currentPosition: selectors.getImmutableCurrentPosition(state, interceptId),
	betPosition: selectors.getScaledBetPosition(state, interceptId),
	newPosition: selectors.getScaledNewPosition(state, interceptId),
	liabilityRatio: selectors.getLiabilityRatio(state, interceptId),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InterceptDetailsRows);
