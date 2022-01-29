export function getInitialGameState() {
  return {
    gameOver: false,
    counter: 0,
    score: 500,
    previousScore: 0,
    betCount: 0,
    betAmount: 1,
    risk: 0,
    canBet: true,
    mustLowerBet: false,
    dice: [1, 2, 3],
    betsWon: 0,
    betsLost: 0,
    pointsWon: 0,
    pointsLost: 0,
    showResults: false,
    bets: {
      Small: {
        betStatus: 'default',
        background: 'dark',
        payout: 1,
      },
      Big: {
        betStatus: 'default',
        background: 'dark',
        payout: 1,
      },
      Double1: {
        betStatus: 'default',
        background: 'dark',
        payout: 10,
      },
      Double2: {
        betStatus: 'default',
        background: 'light',
        payout: 10,
      },
      Double3: {
        betStatus: 'default',
        background: 'dark',
        payout: 10,
      },
      Double4: {
        betStatus: 'default',
        background: 'dark',
        payout: 10,
      },
      Double5: {
        betStatus: 'default',
        background: 'light',
        payout: 10,
      },
      Double6: {
        betStatus: 'default',
        background: 'dark',
        payout: 10,
      },
      Triple1: {
        betStatus: 'default',
        background: 'light',
        payout: 180,
      },
      Triple2: {
        betStatus: 'default',
        background: 'dark',
        payout: 180,
      },
      Triple3: {
        betStatus: 'default',
        background: 'light',
        payout: 180,
      },
      Triple4: {
        betStatus: 'default',
        background: 'light',
        payout: 180,
      },
      Triple5: {
        betStatus: 'default',
        background: 'dark',
        payout: 180,
      },
      Triple6: {
        betStatus: 'default',
        background: 'light',
        payout: 180,
      },
      AnyTriples: {
        betStatus: 'default',
        background: 'light',
        payout: 30,
      },
      Total4: {
        betStatus: 'default',
        background: 'dark',
        payout: 60,
      },
      Total5: {
        betStatus: 'default',
        background: 'light',
        payout: 30,
      },
      Total6: {
        betStatus: 'default',
        background: 'dark',
        payout: 17,
      },
      Total7: {
        betStatus: 'default',
        background: 'light',
        payout: 12,
      },
      Total8: {
        betStatus: 'default',
        background: 'dark',
        payout: 8,
      },
      Total9: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Total10: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Total11: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Total12: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Total13: {
        betStatus: 'default',
        background: 'light',
        payout: 8,
      },
      Total14: {
        betStatus: 'default',
        background: 'dark',
        payout: 12,
      },
      Total15: {
        betStatus: 'default',
        background: 'light',
        payout: 17,
      },
      Total16: {
        betStatus: 'default',
        background: 'dark',
        payout: 30,
      },
      Total17: {
        betStatus: 'default',
        background: 'light',
        payout: 60,
      },
      Combo12: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo13: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo14: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo15: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo16: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo23: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo24: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo25: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo26: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo34: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo35: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo36: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo45: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Combo46: {
        betStatus: 'default',
        background: 'light',
        payout: 6,
      },
      Combo56: {
        betStatus: 'default',
        background: 'dark',
        payout: 6,
      },
      Single1: {
        betStatus: 'default',
        background: 'dark',
        payout: 1,
      },
      Single2: {
        betStatus: 'default',
        background: 'light',
        payout: 1,
      },
      Single3: {
        betStatus: 'default',
        background: 'dark',
        payout: 1,
      },
      Single4: {
        betStatus: 'default',
        background: 'light',
        payout: 1,
      },
      Single5: {
        betStatus: 'default',
        background: 'dark',
        payout: 1,
      },
      Single6: {
        betStatus: 'default',
        background: 'light',
        payout: 1,
      },

    },
  }
}