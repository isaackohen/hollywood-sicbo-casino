<script>
  import Icon from "@iconify/svelte"
  let d = new Date()
  let year = d.getFullYear()
</script>

<footer>
  <div
    class="flex items-center w-full bg-repeat font-inter_regular text-sm border-t border-warm_gray-200 bg-warm_gray-100"
  >
    <div
      class="justify-center bg-warm_gray-100 w-5/6 xl:w-1/3 lg:w-2/5 md:w-3/5 mx-auto py-20"
    >
      <div class="flex w-full justify-center mb-4">
        <div class="w-16">
          <a href="https://t.me/isaac_kohen">
            <img src="/favicon.png" alt="Isaac Kohen" />
          </a>
        </div>
      </div>
      <div class="flex justify-center mb-6">
        <a href="https://t.me/isaac_kohe" class="hover:no-underline">
          <div
            class="font-roboto_bold text-3xl text-medium-gray hover:text-black hover:no-underline"
          >
            Isaac Kohen
          </div>
        </a>
      </div>
      <div
        class="flex items-center justify-center text-sm text-medium-gray w-full"
      >
        <div class="w-full text-center ">
          &copy; {year} - All rights reserved
        </div>
      </div>
    </div>
  </div>
</footer>
