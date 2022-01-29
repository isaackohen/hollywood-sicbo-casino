<script>
  import Bet from "./Bet.svelte"
  import Icon from "@iconify/svelte"
  import { game } from "../../stores/game.js"
</script>

<Bet id={"AnyTriples"}>
  <div class="flex flex-col justify-center h-full">
    <div class="text-base text-center font-nunito_light mb-3">Any Triple</div>
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-1-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-1-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-1-fill" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-2-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-2-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-2-fill" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-3-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-3-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-3-fill" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-4-fill" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-5-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-5-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-5-fill" class="w-8 h-8" />
        </div>
      </div>
      <div class="flex flex-col items-center mr-1">
        <div class="mb-1">
          <Icon icon="bi:dice-6-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-6-fill" class="w-8 h-8" />
        </div>
        <div class="mb-1">
          <Icon icon="bi:dice-6-fill" class="w-8 h-8" />
        </div>
      </div>
    </div>
    <div class="text-xs font-nunito_light text-center mt-2">
      1 wins {$game.bets.AnyTriples.payout}
    </div>
  </div>
</Bet>
