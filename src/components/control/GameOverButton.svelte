<script>
  import { game } from "../../stores/game.js"
</script>

<div
  class="text-xs font-nunito_light px-4 py-2 border border-white rounded-full hover:bg-gray-900 mx-1 cursor-pointer"
  on:click={game.reset}
>
  Play Again
</div>
