<script>
  import Bet from "./Bet.svelte"
  import Icon from "@iconify/svelte"
</script>

<Bet id={"Single4"}>
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col items-center">
      <div class="mb-2">
        <Icon icon="bi:dice-4-fill" class="w-11 h-11" />
      </div>
      <div class="text-xs font-nunito_light text-center">
        1 wins 1 / 2 wins 2/ 3 wins 3
      </div>
    </div>
  </div>
</Bet>
