<template>
  <!-- Read how Layouts, Pages, Templates and collections work here: https://gridsome.org/docs/core-concepts/ -->
  <div class="border-t-8 border-red-600 border-solid">
    <div class="container max-w-3xl px-4 mx-auto">
        <slot />
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: 'ITC Fenice Std';
    src: url('../assets/fonts/FeniceStd-Oblique.eot');
    src: url('../assets/fonts/FeniceStd-Oblique.eot') format('embedded-opentype'),
        url('../assets/fonts/FeniceStd-Oblique.woff2') format('woff2'),
        url('../assets/fonts/FeniceStd-Oblique--old.otf') format('otf'),
        url('../assets/fonts/FeniceStd-Oblique.woff') format('woff'),
        url('../assets/fonts/FeniceStd-Oblique.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}
</style>