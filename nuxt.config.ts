// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: ["@nuxtjs/tailwindcss", "nuxt-vuetify", "@pinia/nuxt"],

    // add head for web app capable and so on, viewport 1
    app: {
        head: {
            title: 'OrderSync',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'mobile-web-app-capable', content: 'yes'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/icon.jpeg'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/icon.jpeg'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon.jpeg'},
            ]
        }
    },

})