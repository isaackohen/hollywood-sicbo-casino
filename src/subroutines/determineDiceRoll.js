export function determineDiceRoll() {
  let dice = []
  dice[0] = Math.floor(Math.random() * 6) + 1
  dice[1] = Math.floor(Math.random() * 6) + 1
  dice[2] = Math.floor(Math.random() * 6) + 1
  return dice
}