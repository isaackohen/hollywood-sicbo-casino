<script>
  import BetButton from "./BetButton.svelte"
  import ClearBetsButton from "./ClearBetsButton.svelte"
  import { game } from "../../stores/game.js"
</script>

{#if $game.gameOver}
  <div class="h-full bg-gray-600" />
{:else}
  <div
    class="flex items-center justify-center h-full {$game.canBet &&
    !$game.mustLowerBet
      ? 'bg-gray-600'
      : 'bg-red-600'} text-white"
  >
    <div class="flex flex-col items-center">
      {#if $game.canBet && !$game.mustLowerBet}
        <div class="text-sm font-nunito_light mb-3">
          BET {$game.betCount} X {$game.betAmount} = {$game.risk}
        </div>
      {:else if $game.mustLowerBet}
        <div class="text-sm font-nunito_light mb-3">
          BET {$game.betCount} X {$game.betAmount} = {$game.risk} TOO MANY BETS
        </div>
      {:else}
        <div class="text-sm font-nunito_light mb-3">
          BET {$game.betCount} X {$game.betAmount} = {$game.risk} MAX BET PLACED
        </div>
      {/if}
      <div class="flex items-start justify-center w-full">
        <div><BetButton betAmount="1" /></div>
        <div><BetButton betAmount="5" /></div>
        <div><BetButton betAmount="10" /></div>
        <div><ClearBetsButton /></div>
      </div>
    </div>
  </div>
{/if}
