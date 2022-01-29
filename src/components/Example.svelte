<script>
  import { example } from "../stores/example.js"
</script>

<div class="w-1/2 bg-gray-100 mx-auto font-roboto_bold p-12">
  <div class="flex items-center justify-center w-full text-3xl mb-4">
    Svelte Example
  </div>
  <div class="flex items-center justify-center w-full text-5xl mb-6">
    {$example.counter}
  </div>
  <div class="grid grid-cols-3 gap-x-10 text-4xl">
    <div
      class="bg-gray-500 text-white text-center py-3 cursor-pointer rounded"
      on:click={example.increment}
    >
      +
    </div>
    <div
      class="bg-gray-500 text-white text-center py-3 cursor-pointer rounded"
      on:click={example.decrement}
    >
      -
    </div>
    <div
      class="bg-gray-500 text-white text-center py-3 cursor-pointer rounded"
      on:click={example.reset}
    >
      *
    </div>
  </div>
</div>
