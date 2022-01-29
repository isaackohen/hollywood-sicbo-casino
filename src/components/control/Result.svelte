<script>
  import { game } from "../../stores/game.js"
</script>

{#if $game.showResults}
  <div class="flex items-center justify-center h-full bg-gray-600 text-white">
    <div class="grid grid-cols-12 gap-x-3 gap-y-1 text-xs font-nunito_light">
      <div class="col-span-8">OLD SCORE</div>
      <div class="col-span-1" />
      <div class="col-span-3 text-right">{$game.previousScore}</div>
      <div class="col-span-8">{$game.betsWon} BETS WON</div>
      <div class="col-span-1">+</div>
      <div class="col-span-3 text-right">{$game.pointsWon}</div>
      <div class="col-span-8">{$game.betsLost} BETS LOST</div>
      <div class="col-span-1">-</div>
      <div class="col-span-3 text-right">{$game.pointsLost}</div>
      <div class="col-span-8">NEW SCORE</div>
      <div class="col-span-1" />
      <div class="col-span-3 text-right">{$game.score}</div>
    </div>
  </div>
{:else}
  <div class="h-full bg-gray-600" />
{/if}
