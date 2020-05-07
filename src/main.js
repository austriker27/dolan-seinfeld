// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'
import '~/assets/css/main.css'


export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased' }

// Styles
head.link.push({
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css',
})

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Peter B. Dolan',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Seinfeld,COVID-19,COVID,Coronavirus,Jerry Seinfeld,Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push({
    name: 'description',
    content: 'Coronavirus locks down New York as Jerry, Kramer, George and Elaine try and fail at social distancing amidst their various problems.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'Coronavirus locks down New York as Jerry, Kramer, George and Elaine try and fail at social distancing amidst their various problems.',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Coronavirus locks down New York as Jerry, Kramer, George and Elaine try and fail at social distancing amidst their various problems.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'The Lockdown - A fan written Seinfeld Script where Coronavirus locks down New York.',
  })

  head.meta.push({
    name: 'twitter:title',
      content: 'The Lockdown - A fan written Seinfeld Script where Coronavirus locks down New York.',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@austriker27',
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://thelockdown.netlify.app/img/social-preview.jpg',
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://thelockdown.netlify.app/img/social-preview.jpg',
  })
}
