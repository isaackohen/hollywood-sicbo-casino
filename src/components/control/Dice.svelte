<script>
  import RollDiceButton from "./RollDiceButton.svelte"
  import Die from "./Die.svelte"
  import { game } from "../../stores/game.js"
</script>

<div class="flex items-center justify-center h-full bg-gray-600 text-white">
  <div class="mr-2"><RollDiceButton /></div>
  <div class="mx-1"><Die value={$game.dice[0]} /></div>
  <div class="mx-1"><Die value={$game.dice[1]} /></div>
  <div class="mx-1"><Die value={$game.dice[2]} /></div>
</div>
