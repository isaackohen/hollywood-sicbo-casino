<script>
  import { game } from "../../stores/game.js"
</script>

<div class="flex items-center justify-center h-full bg-gray-600 text-white">
  <div class="flex flex-col items-center">
    <div class="text-xs font-nunito_light text-center>Holly Dollars</div>
    <div class="font-roboto_bold text-4xl w-full text-center">
      {$game.score}
    </div>
  </div>
</div>
