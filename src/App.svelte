<script>
  import BigSmall from "./components/rows/BigSmall.svelte"
  import DoublesAndTriples from "./components/rows/DoublesAndTriples.svelte"
  import Totals from "./components/rows/Totals.svelte"
  import Combos from "./components/rows/Combos.svelte"
  import Singles from "./components/rows/Singles.svelte"
  import Control from "./components/rows/Control.svelte"
  import Footer from "./components/Footer.svelte"
</script>

<svelte:head>
  <title>SicBo</title>
  <meta
    name="description"
    content="Hollywood TV Sic:bo"
  />
  <html lang="en" />
</svelte:head>

<main>
  <div class="hidden xl:block w-5/6 mx-auto mb-6">
    <div class="mb-2">
      <BigSmall />
    </div>
    <div class="my-2">
      <DoublesAndTriples />
    </div>
    <div class="mb-2">
      <Totals />
    </div>
    <div class="mb-2">
      <Combos />
    </div>
    <div class="mb-2">
      <Singles />
    </div>
    <div class="">
      <Control />
    </div>
  </div>
  <div class="flex items-center justify-center xl:hidden">
    <div
      class="w-full md:w-3/4 text-2xl font-roboto_bold font-gray-600 text-center  my-48"
    >
      A large display is required to play SicBo
    </div>
  </div>
  <Footer />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    a {
      @apply text-red-600;
    }
    a:visited {
      @apply text-red-600;
    }
    @font-face {
      font-family: "roboto_bold";
      src: url("fonts/RobotoSlab-Bold-webfont.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_black";
      src: url("fonts/NunitoSans-Black.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_black_italic";
      src: url("fonts/NunitoSans-BlackItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_bold";
      src: url("fonts/NunitoSans-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_bold_italic";
      src: url("fonts/NunitoSans-BoldItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_extrabold";
      src: url("fonts/NunitoSans-ExtraBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_extrabold_italic";
      src: url("fonts/NunitoSans-ExtraBoldItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_extralight";
      src: url("fonts/NunitoSans-ExtraLight.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_extralight_italic";
      src: url("fonts/NunitoSans-ExtraLightItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_italic";
      src: url("fonts/NunitoSans-Italic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_light";
      src: url("fonts/NunitoSans-Light.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_light_italic";
      src: url("fonts/NunitoSans-LightItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_regular";
      src: url("fonts/NunitoSans-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_semibold";
      src: url("fonts/NunitoSans-SemiBold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: "nunito_semibold_italic";
      src: url("fonts/NunitoSans-SemiBoldItalic.woff") format("woff");
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
  }
</style>
