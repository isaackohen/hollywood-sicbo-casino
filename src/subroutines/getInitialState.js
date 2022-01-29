export function getInitialState() {
  return {
    diceHaveBeenRolled: false,
    pay: false,
    lastClicked: 'Hello',
    bets: {
      Small: {
        status: 'default',
        payout: 1,
      },
      Big: {
        status: 'default',
        payout: 1,
      },
      Double1: {
        status: 'default',
        payout: 10,
      },
    },
  }
}