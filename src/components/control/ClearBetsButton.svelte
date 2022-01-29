<script>
  import { game } from "../../stores/game.js"
</script>

{#if $game.betCount < 1}
  <div
    class="text-xs font-nunito_light px-2 border border-gray-400 rounded-full text-gray-400 mx-1"
  >
    Clear All Bets
  </div>
{:else}
  <div
    class="text-xs font-nunito_light px-2 border border-white rounded-full hover:bg-gray-900 mx-1 cursor-pointer"
    on:click={game.clearBets}
  >
    Clear All Bets
  </div>
{/if}
