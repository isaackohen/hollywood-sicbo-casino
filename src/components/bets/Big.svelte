<script>
  import Bet from "./Bet.svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"Big"}>
  <div class="text-2xl font-roboto_bold text-center">Big</div>
  <div class="text-xs font-nunito_light text-center mt-2">
    11 to 17 - Triples Lose - 1 wins {$game.bets.Big.payout}
  </div>
</Bet>
