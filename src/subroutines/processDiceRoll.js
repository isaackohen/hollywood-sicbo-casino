import { each } from "svelte/internal"

export function processDiceRoll(state) {
  let ones = 0
  let twos = 0
  let threes = 0
  let fours = 0
  let fives = 0
  let sixes = 0
  let total = 0
  let betsWon = 0
  let betsLost = 0
  let pointsWon = 0
  let pointsLost = 0
  
  for (let i = 0; i < 3; i++) {
      switch (state.dice[i]) {
        case 1:
          ones++
          break
        case 2:
          twos++
          break
        case 3:
          threes++
          break
        case 4:
          fours++
          break
        case 5:
          fives++
          break
        case 6:
          sixes++
          break
      }
      total += state.dice[i]
  }

  if (state.bets.Small.betStatus != 'default') {
    if (total > 3 && total < 11 && twos != 3 && threes != 3) {
      state.bets.Small.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Small.payout
    }
    else {
      state.bets.Small.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount 
    }
  }
  
  if (state.bets.Big.betStatus != 'default') {
    if (total > 10 && total < 18  && fours != 3 && fives != 3) {
      state.bets.Big.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Big.payout
    }
    else {
      state.bets.Big.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount 
    }
  }

  // Doubles
  
  if (state.bets.Double1.betStatus != 'default') {
    if (ones >= 2) {
      state.bets.Double1.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double1.payout
    }
    else {
      state.bets.Double1.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Double2.betStatus != 'default') {
    if (twos >= 2) {
      state.bets.Double2.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double2.payout
    }
    else {
      state.bets.Double2.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Double3.betStatus != 'default') {
    if (threes >= 2) {
      state.bets.Double3.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double3.payout
    }
    else {
      state.bets.Double3.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Double4.betStatus != 'default') {
    if (fours >= 2) {
      state.bets.Double4.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double4.payout
    }
    else {
      state.bets.Double4.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Double5.betStatus != 'default') {
    if (fives >= 2) {
      state.bets.Double5.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double5.payout
    }
    else {
      state.bets.Double5.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Double6.betStatus != 'default') {
    if (sixes >= 2) {
      state.bets.Double6.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Double6.payout
    }
    else {
      state.bets.Double6.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  // Triples

    
  if (state.bets.Triple1.betStatus != 'default') {
    if (ones === 3) {
      state.bets.Triple1.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple1.payout
    }
    else {
      state.bets.Triple1.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Triple2.betStatus != 'default') {
    if (twos === 3) {
      state.bets.Triple2.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple2.payout
    }
    else {
      state.bets.Triple2.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Triple3.betStatus != 'default') {
    if (threes === 3) {
      state.bets.Triple3.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple3.payout
    }
    else {
      state.bets.Triple3.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Triple4.betStatus != 'default') {
    if (fours === 3) {
      state.bets.Triple4.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple4.payout
    }
    else {
      state.bets.Triple4.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Triple5.betStatus != 'default') {
    if (fives === 3) {
      state.bets.Triple5.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple5.payout
    }
    else {
      state.bets.Triple5.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Triple6.betStatus != 'default') {
    if (sixes === 3) {
      state.bets.Triple6.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Triple6.payout
    }
    else {
      state.bets.Triple6.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.AnyTriples.betStatus != 'default') {
    if (ones === 3 || twos === 3 || threes === 3 || fours === 3 || fives === 3 ||sixes === 3) {
      state.bets.AnyTriples.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.AnyTriples.payout
    }
    else {
      state.bets.AnyTriples.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount 
    }
  }

  // Total

  if (state.bets.Total4.betStatus != 'default') {
    if (total === 4) {
      state.bets.Total4.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total4.payout
    }
    else {
      state.bets.Total4.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total5.betStatus != 'default') {
    if (total === 5) {
      state.bets.Total5.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total5.payout
    }
    else {
      state.bets.Total5.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total6.betStatus != 'default') {
    if (total === 6) {
      state.bets.Total6.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total6.payout
    }
    else {
      state.bets.Total6.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total7.betStatus != 'default') {
    if (total === 7) {
      state.bets.Total7.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total7.payout
    }
    else {
      state.bets.Total7.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total8.betStatus != 'default') {
    if (total === 8) {
      state.bets.Total8.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total8.payout
    }
    else {
      state.bets.Total8.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total9.betStatus != 'default') {
    if (total === 9) {
      state.bets.Total9.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total9.payout
    }
    else {
      state.bets.Total9.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total10.betStatus != 'default') {
    if (total === 10) {
      state.bets.Total10.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total10.payout
    }
    else {
      state.bets.Total10.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total11.betStatus != 'default') {
    if (total === 11) {
      state.bets.Total11.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total11.payout
    }
    else {
      state.bets.Total11.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total12.betStatus != 'default') {
    if (total === 12) {
      state.bets.Total12.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total12.payout
    }
    else {
      state.bets.Total12.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total13.betStatus != 'default') {
    if (total === 13) {
      state.bets.Total13.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total13.payout
    }
    else {
      state.bets.Total13.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total14.betStatus != 'default') {
    if (total === 14) {
      state.bets.Total14.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total14.payout
    }
    else {
      state.bets.Total14.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total15.betStatus != 'default') {
    if (total === 15) {
      state.bets.Total15.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total15.payout
    }
    else {
      state.bets.Total15.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total16.betStatus != 'default') {
    if (total === 16) {
      state.bets.Total16.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total16.payout
    }
    else {
      state.bets.Total16.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Total17.betStatus != 'default') {
    if (total === 17) {
      state.bets.Total17.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Total17.payout
    }
    else {
      state.bets.Total17.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  // Combos

  if (state.bets.Combo12.betStatus != 'default') {
    if (ones > 0 && twos > 0) {
      state.bets.Combo12.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo12.payout
    }
    else {
      state.bets.Combo12.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo13.betStatus != 'default') {
    if (ones > 0 && threes > 0) {
      state.bets.Combo13.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo13.payout
    }
    else {
      state.bets.Combo13.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo14.betStatus != 'default') {
    if (ones > 0 && fours > 0) {
      state.bets.Combo14.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo14.payout
    }
    else {
      state.bets.Combo14.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo15.betStatus != 'default') {
    if (ones > 0 && fives > 0) {
      state.bets.Combo15.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo15.payout
    }
    else {
      state.bets.Combo15.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo16.betStatus != 'default') {
    if (ones > 0 && sixes > 0) {
      state.bets.Combo16.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo16.payout
    }
    else {
      state.bets.Combo16.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo23.betStatus != 'default') {
    if (twos > 0 && threes > 0) {
      state.bets.Combo23.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo23.payout
    }
    else {
      state.bets.Combo23.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo24.betStatus != 'default') {
    if (twos > 0 && fours > 0) {
      state.bets.Combo24.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo24.payout
    }
    else {
      state.bets.Combo24.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo25.betStatus != 'default') {
    if (twos > 0 && fives > 0) {
      state.bets.Combo25.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo25.payout
    }
    else {
      state.bets.Combo25.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo26.betStatus != 'default') {
    if (twos > 0 && sixes > 0) {
      state.bets.Combo26.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo26.payout
    }
    else {
      state.bets.Combo26.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo34.betStatus != 'default') {
    if (threes > 0 && fours > 0) {
      state.bets.Combo34.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo34.payout
    }
    else {
      state.bets.Combo34.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo35.betStatus != 'default') {
    if (threes > 0 && fives > 0) {
      state.bets.Combo35.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo35.payout
    }
    else {
      state.bets.Combo35.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo36.betStatus != 'default') {
    if (threes > 0 && sixes > 0) {
      state.bets.Combo36.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo36.payout
    }
    else {
      state.bets.Combo36.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo45.betStatus != 'default') {
    if (fours > 0 && fives > 0) {
      state.bets.Combo45.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo45.payout
    }
    else {
      state.bets.Combo45.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo46.betStatus != 'default') {
    if (fours > 0 && sixes > 0) {
      state.bets.Combo46.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo46.payout
    }
    else {
      state.bets.Combo46.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Combo56.betStatus != 'default') {
    if (fives > 0 && sixes > 0) {
      state.bets.Combo56.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Combo56.payout
    }
    else {
      state.bets.Combo56.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  // Singles

  if (state.bets.Single1.betStatus != 'default') {
    if (ones > 0) {
      state.bets.Single1.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single1.payout * ones
    }
    else {
      state.bets.Single1.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Single2.betStatus != 'default') {
    if (twos > 0) {
      state.bets.Single2.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single2.payout * twos
    }
    else {
      state.bets.Single2.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Single3.betStatus != 'default') {
    if (threes > 0) {
      state.bets.Single3.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single3.payout * threes
    }
    else {
      state.bets.Single3.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Single4.betStatus != 'default') {
    if (fours > 0) {
      state.bets.Single4.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single4.payout * fours
    }
    else {
      state.bets.Single4.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Single5.betStatus != 'default') {
    if (fives > 0) {
      state.bets.Single5.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single5.payout * fives
    }
    else {
      state.bets.Single5.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  if (state.bets.Single6.betStatus != 'default') {
    if (sixes > 0) {
      state.bets.Single6.betStatus = 'betWon'
      betsWon++
      pointsWon += state.betAmount * state.bets.Single6.payout * sixes
    }
    else {
      state.bets.Single6.betStatus = 'betLost'
      betsLost++
      pointsLost += state.betAmount
    }
  }

  state.betsWon = betsWon
  state.betsLost = betsLost
  state.pointsWon = pointsWon
  state.pointsLost = pointsLost
  state.previousScore = state.score
  state.score = state.score + pointsWon - pointsLost
  state.showResults = true

  // Check to see if additional bets can be made
  if ((state.score - state.risk) < state.betAmount) {
    state.canBet = false
  } else {
    state.canBet = true
  }

  // Check to see if some bets need to be removed
  if ((state.score - state.risk) >= 0) {
    state.mustLowerBet = false
  } else {
    state.mustLowerBet = true
  }
  if (state.score <= 0) state.gameOver = true
  return state
}