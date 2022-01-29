<script>
  import Bet from "./Bet.svelte"
  import Icon from "@iconify/svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"Combo26"}>
  <div class="flex items-center justify-center h-full p-1">
    <div class="flex flex-col items-center">
      <div class="mb-1">
        <Icon icon="bi:dice-2-fill" class="w-11 h-11" />
      </div>
      <div class="mb-2">
        <Icon icon="bi:dice-6-fill" class="w-11 h-11" />
      </div>
      <div class="text-xs font-nunito_light text-center">
        1 wins {$game.bets.Combo26.payout}
      </div>
    </div>
  </div>
</Bet>
