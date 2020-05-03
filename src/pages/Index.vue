<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    

    <div class="flex flex-wrap items-center justify-center mt-8 md:mt-16">
      <div class="relative px-4 py-2">
        <h1 class="block text-5xl text-center text-gray-700 text-red-600 bg-center bg-no-repeat bg-contain border-yellow-600 border-solid font-seinfeld sm:text-7xl sm:pr-8 border-b-3" >
          {{ $static.metadata.siteName }}
        </h1>
        <!-- <div class="absolute ">
            <g-image
                class="block w-auto h-32"
                alt="Logo"
                src="~/assets/img/s-logo-circle.svg"
            />
        </div> -->
      </div>

      <!-- <g-image
        class="block w-auto h-32"
        alt="Logo"
        src="~/assets/img/1200px-Seinfeld_logo.svg.png"
      /> -->
    </div>

    <h2>What is the gang up to during the quarantine?</h2>

    <p class="pb-2 font-sans text-2xl text-gray-700">Written by Peter Dolan.</p>

    <h3>h3 tag  </h3>
    <h4>h4 tag  </h4>
    <h5>h5 tag  </h5>
    <h6>h6 tag  </h6>

    <!-- <ul class="text-lg leading-relaxed">
      <li><strong><a href="https://tailwindcss.com">Tailwind CSS</a></strong> w/ minimal base styles</li>
      <li><strong>Single page</strong> for your content, nothing else.</li>
      <li class="text-base text-gray-800">Ready if you need them: <strong>Google Analytics</strong> and <strong>Open Graph meta tags</strong></li>
    </ul> -->

    <!-- FOOTER -->
    <p class="mt-16 mb-8 text-xs text-center">
      Website by <br />
      &copy; David Lindahl (<a
        class="text-blue-700 underline"
        href="https://twitter.com/austriker27"
      >@austriker27</a>) | 2020
    </p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    // import logoCircle from "@/assets/img/s-logo-circle.svg";
  metaInfo: {
    title: "Seinfeld Script - COVID Edition"
  }
};
</script>

<style scoped>
.font-seinfeld {
    background-image: url(~@/assets/img/s-logo-circle.svg);
    text-shadow: 1px 1px 0 rgb(0, 0, 0);
}
</style>
