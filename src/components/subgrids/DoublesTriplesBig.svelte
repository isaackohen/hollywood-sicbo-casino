<script>
  import Double4 from "../bets/Double4.svelte"
  import Double5 from "../bets/Double5.svelte"
  import Double6 from "../bets/Double6.svelte"
  import Triple4 from "../bets/Triple4.svelte"
  import Triple5 from "../bets/Triple5.svelte"
  import Triple6 from "../bets/Triple6.svelte"
</script>

<div class="grid grid-cols-5">
  <div class="col-span-2">
    <Triple4 />
    <Triple5 />
    <Triple6 />
  </div>

  <Double4 />
  <Double5 />
  <Double6 />
</div>
