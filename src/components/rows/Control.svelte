<script>
  import Score from "../control/Score.svelte"
  import Result from "../control/Result.svelte"
  import BetControl from "../control/BetControl.svelte"
  import Dice from "../control/Dice.svelte"
  import GameOver from "../control/GameOver.svelte"
  import { game } from "../../stores/game.js"
</script>

<div class="flex w-full h-24">
  <div class="w-1/4 pr-1"><Score /></div>
  <div class="w-1/4 px-1"><Result /></div>
  <div class="w-1/4 px-1"><BetControl /></div>
  {#if $game.gameOver}
    <div class="w-1/4 pl-1"><GameOver /></div>
  {:else}
    <div class="w-1/4 pl-1"><Dice /></div>
  {/if}
</div>
