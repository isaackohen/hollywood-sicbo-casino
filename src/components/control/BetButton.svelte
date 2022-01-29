<script>
  import { game } from "../../stores/game.js"
  export let betAmount
  const intBetAmount = parseInt(betAmount)
</script>

{#if intBetAmount === $game.betAmount}
  <div
    class="text-xs font-nunito_light px-2 border border-white rounded-full bg-white text-black mx-1"
  >
    Bet {betAmount}
  </div>
{:else if intBetAmount * $game.betCount > $game.score}
  <div
    class="text-xs font-nunito_light px-2 border border-gray-400 rounded-full text-gray-400 mx-1"
  >
    Bet {betAmount}
  </div>
{:else}
  <div
    class="text-xs font-nunito_light px-2 border border-white rounded-full hover:bg-gray-900 mx-1 cursor-pointer"
    on:click={game.changeBetAmount(betAmount)}
  >
    Bet {betAmount}
  </div>
{/if}
