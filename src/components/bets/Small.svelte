<script>
  import Bet from "./Bet.svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"Small"}>
  <div class="text-2xl font-roboto_bold text-center">Small</div>
  <div class="text-xs font-nunito_light text-center mt-2">
    4 to 10 - Triples Lose - 1 wins {$game.bets.Small.payout}
  </div>
</Bet>
