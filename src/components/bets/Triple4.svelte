<script>
  import Bet from "./Bet.svelte"
  import Icon from "@iconify/svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"Triple4"}>
  <div class="flex flex-col">
    <div class="flex justify-center mb-1">
      <div class="mr-1">
        <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
      </div>
      <div class="mr-1">
        <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
      </div>
      <div class="">
        <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
      </div>
    </div>
    <div class="text-xs font-nunito_light text-center">
      1 wins {$game.bets.Triple4.payout}
    </div>
  </div>
</Bet>
