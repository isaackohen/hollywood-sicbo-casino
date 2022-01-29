import { writable } from 'svelte/store';
import { getInitialGameState } from '../subroutines/getInitialGameState';
import { determineDiceRoll } from '../subroutines/determineDiceRoll';
import { processDiceRoll } from '../subroutines/processDiceRoll';

function createGame() {
	const { subscribe, set, update } = writable(getInitialGameState());

	return {
    subscribe,
    
    // increment: (amount) => update(state => {
    //   console.log('increment ' + amount)
    //   state.counter = state.counter + amount
    //   return state
    // }),

		// decrement: () => update(state => {
    //   state.counter--
    //   return state
    // }),

    reset: () => set(getInitialGameState()),
    
    betStatus: (id) => update(state => {
      // Check if a new bet can be made
      if (!state.canBet && state.bets[id].betStatus === 'default') return state

      // Reset status for bets won and lost
      let bets = state.bets
      Object.keys(bets).forEach(function (item) {
        if (bets[item].betStatus === 'betWon' || bets[item].betStatus === 'betLost')
        bets[item].betStatus = 'placedBet'
      });
      state.bets = bets

      // Update the status of the selected bet
      const currentBetStatus = state.bets[id].betStatus
      if (currentBetStatus != 'default' && currentBetStatus != 'placedBet') {
        return state
      }
      if (currentBetStatus === 'placedBet') {
        state.bets[id].betStatus = 'default'
        state.betCount--
      }
      else if (currentBetStatus === 'default') {
        state.bets[id].betStatus = 'placedBet'
        state.betCount++
      }

      state.risk = state.betAmount * state.betCount

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

      // Hide the results from the last roll
      state.showResults = false

      return state
    }),
    
    changeBetAmount: (betAmount) => update(state => {
      const intBetAmount = parseInt(betAmount)
      state.betAmount = intBetAmount
      const risk = intBetAmount * state.betCount
      state.risk = risk

      // Check to see if additional bets can be made
      if ((state.score - risk) < state.betAmount) {
        state.canBet = false
      } else {
        state.canBet = true
      }

      if ((state.score - risk) >= 0) {
        state.mustLowerBet = false
      } else {
        state.mustLowerBet = true
      }
      
      return state
    }),
    
    clearBets: () => update(state => {
      let bets = state.bets
      Object.keys(bets).forEach(function (item) {
        bets[item].betStatus = 'default'
      });
      state.bets = bets
      state.betCount = 0
      state.risk = 0
      state.showResults = false
      state.canBet = true
      state.mustLowerBet = false
      return state
    }),

    rollDice: () => update(state => {
      let counter = 9

      const interval = setInterval(() => {
        state.dice = determineDiceRoll()
        counter--
        set(state)

        // Finish off the roll.
        if (counter < 0) {
          state = processDiceRoll(state)
          clearInterval(interval)
        }
      }, 60)

      return state
    }),
	};
}

export const game = createGame();