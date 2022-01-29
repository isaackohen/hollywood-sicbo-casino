<script>
  import Bet from "./Bet.svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"Total13"}>
  <div class="p-1">
    <div class="font-roboto_bold text-4xl w-full text-center">13</div>
    <div class="text-xs font-nunito_light w-full text-center pt-1">
      1 wins {$game.bets.Total13.payout}
    </div>
  </div>
</Bet>
