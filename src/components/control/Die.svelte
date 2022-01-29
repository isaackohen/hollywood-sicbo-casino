<script>
  import Icon from "@iconify/svelte"
  export let value
</script>

{#if value === 1}
  <Icon icon="bi:dice-1-fill" class="w-11 h-11" />
{:else if value === 2}
  <Icon icon="bi:dice-2-fill" class="w-11 h-11" />
{:else if value === 3}
  <Icon icon="bi:dice-3-fill" class="w-11 h-11" />
{:else if value === 4}
  <Icon icon="bi:dice-4-fill" class="w-11 h-11" />
{:else if value === 5}
  <Icon icon="bi:dice-5-fill" class="w-11 h-11" />
{:else if value === 6}
  <Icon icon="bi:dice-6-fill" class="w-11 h-11" />
{/if}
