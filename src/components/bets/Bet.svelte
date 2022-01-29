<script>
  import { game } from "../../stores/game.js"
  export let id
</script>

{#if $game.bets[id].betStatus === "default" && $game.bets[id].background === "light"}
  <div
    class="py-2 bg-gray-100 {$game.canBet ? 'cursor-pointer' : ''}"
    on:click={game.betStatus(id)}
  >
    <slot />
  </div>
{:else if $game.bets[id].betStatus === "default" && $game.bets[id].background === "dark"}
  <div
    class="py-2 bg-gray-200 {$game.canBet ? 'cursor-pointer' : ''}"
    on:click={game.betStatus(id)}
  >
    <slot />
  </div>
{:else if $game.bets[id].betStatus === "placedBet"}
  <div class="py-2 bg-yellow-400 cursor-pointer" on:click={game.betStatus(id)}>
    <slot />
  </div>
{:else if $game.bets[id].betStatus === "betWon"}
  <div
    class="py-2 bg-green-600 text-white cursor-pointer"
    on:click={game.betStatus(id)}
  >
    <slot />
  </div>
{:else if $game.bets[id].betStatus === "betLost"}
  <div
    class="py-2 bg-red-600 text-white cursor-pointer"
    on:click={game.betStatus(id)}
  >
    <slot />
  </div>
{/if}
