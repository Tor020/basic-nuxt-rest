// load our .env file
require('dotenv').config();

module.exports = {

    // setting the currents page html header params
    head: {
        titleTemplate: '%s - ' + process.env.SITE_NAME, // the title of the site, %s is the placeholder for the current page's title
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'HandheldFriendly', content: 'true' }
        ]
    },

    css: [
        '~/assets/scss/styles.scss', // load the current project scss entry file
        { src: '~/node_modules/highlight.js/styles/atom-one-dark.css', lang: 'css' } // use the atom-one-dark theme for highlight.js
    ],

    plugins: [
        '~/plugins/components' // inject all page components
    ],

    modules: [
        '@nuxtjs/axios', // XHR package
        '@nuxtjs/markdownit' // compile markdown files
    ],

    build: {
        extractCSS: true, // extract inline css into separate files
    },

    // the markdownit configuration
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        use: [
            'markdown-it-highlightjs'
        ] 
    }

}