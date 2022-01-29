<script>
  import { game } from "../../stores/game.js"
</script>

{#if $game.betCount === 0 || $game.mustLowerBet}
  <div
    class="text-xs font-nunito_light px-4 py-2 border border-gray-400 rounded-full text-gray-400 mx-1"
  >
    Roll Dice
  </div>
{:else}
  <div
    class="text-xs font-nunito_light px-4 py-2 border border-white rounded-full hover:bg-gray-900 mx-1 cursor-pointer"
    on:click={game.rollDice}
  >
    Roll Dice
  </div>
{/if}
