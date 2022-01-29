<script>
  import Double1 from "../bets/Double1.svelte"
  import Double2 from "../bets/Double2.svelte"
  import Double3 from "../bets/Double3.svelte"
  import Triple1 from "../bets/Triple1.svelte"
  import Triple2 from "../bets/Triple2.svelte"
  import Triple3 from "../bets/Triple3.svelte"
</script>

<div class="grid grid-cols-5">
  <Double1 />
  <Double2 />
  <Double3 />

  <div class="col-span-2">
    <Triple1 />
    <Triple2 />
    <Triple3 />
  </div>
</div>
