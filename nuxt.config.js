// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
    process.env.DEPLOY_ENV === "GH_PAGES" ? "/hualienCityPlan/" : "";

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",
    ssr: true,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "花蓮城市空間藝術節 | Hualien Performing Public Space Festival",
        htmlAttrs: {
            lang: "zh-Hant-TW"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/normalize.css",
        "@/assets/css/global.scss",
        "vue-slick-carousel/dist/vue-slick-carousel.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
            src: "~/plugins/aos",
            ssr: false
        },
        { src: "./plugins/vue-slick-carousel.js" },
        { src: "./plugins/v-observe.js" },
        {
            src: "./plugins/v-scrollto.js"
        }
    ],

    // Auto import components: https://go. nuxtjs.dev/config-components
    components: {
        dirs: ["~/components", "~/components/layout"]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/device"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["nuxt-lazy-load"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {
        base: routerBase
    }
};