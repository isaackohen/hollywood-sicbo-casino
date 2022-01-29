<script>
  import Small from "../bets/Small.svelte"
  import Big from "../bets/Big.svelte"
</script>

<div class="grid grid-cols-3 gap-x-2">
  <Small />
  <div class="flex flex-col items-center justify-center w-full">
    <div class="text-5xl font-roboto_bold text-center">SicBo</div>
    <div>
      <a
        href="https://www.pokernews.com/casino/sic-bo-game.htm"
        class="text-sm font-nunito_light">How to Play</a
      >
    </div>
  </div>
  <Big />
</div>
