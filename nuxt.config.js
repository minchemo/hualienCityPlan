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
            {
                hid: "description",
                name: "description",
                content: "「2021花蓮城市空間藝術節－溫花蓮」，以「溫」來定調花蓮的溫、文、穩、問。「溫」，代表著城市氣息、居民特性、旅客心境，「溫」是坦然地保持熱度，也是醞釀中期待沸騰。溫花蓮，我們花蓮，我們的花蓮，以一場城市藝術節來回看，與我們同在一起生活的花蓮人們，是如何一起讓花蓮成為現在的花蓮。我們希望觸發「問答」，問問洄瀾緩流當中對生態的未來觀點，問問城市慢生之中對鄉鎮互聯的合作可能，問問在低速天光之下對文化城市的體驗設計。這也是藝術創作的本質，以敏銳的觀察與細緻的技藝來提出問題，當我們願意讓「問」成為習慣，城市的空間，便能夠從被動的介紹與細數過往故事當中，找到主動面對未來的動能，這也是藝術存在的原因。在花蓮，正適合溫溫的問，溫溫的答，溫溫讓「問答」成為城市的動詞，讓花蓮成為一座習慣共識的城市。"
            },
            { name: "format-detection", content: "telephone=no" },
            {
                property: "og:title",
                content: "花蓮城市空間藝術節 | Hualien Performing Public Space Festival"
            },
            {
                property: "og:description",
                content: "「2021花蓮城市空間藝術節－溫花蓮」，以「溫」來定調花蓮的溫、文、穩、問。「溫」，代表著城市氣息、居民特性、旅客心境，「溫」是坦然地保持熱度，也是醞釀中期待沸騰。溫花蓮，我們花蓮，我們的花蓮，以一場城市藝術節來回看，與我們同在一起生活的花蓮人們，是如何一起讓花蓮成為現在的花蓮。我們希望觸發「問答」，問問洄瀾緩流當中對生態的未來觀點，問問城市慢生之中對鄉鎮互聯的合作可能，問問在低速天光之下對文化城市的體驗設計。這也是藝術創作的本質，以敏銳的觀察與細緻的技藝來提出問題，當我們願意讓「問」成為習慣，城市的空間，便能夠從被動的介紹與細數過往故事當中，找到主動面對未來的動能，這也是藝術存在的原因。在花蓮，正適合溫溫的問，溫溫的答，溫溫讓「問答」成為城市的動詞，讓花蓮成為一座習慣共識的城市。"
            },
            { property: "og:image", content: "https://i.imgur.com/tbKtP9v.jpg" },
            { property: "og:url", content: "https://2021hualienfestival.tw" },
            { property: "og:type", content: "website" },
            {
                property: "og:site_name",
                content: "花蓮城市空間藝術節 | Hualien Performing Public Space Festival"
            },
            { property: "og:image", content: "@/assets/img/og_image.jpg" },
            { property: "og:image:alt", content: "花蓮城市空間藝術節" },
            { property: "og:image:type", content: "image/jpg" },
            { property: "og:image:width", content: "4040" },
            { property: "og:image:height", content: "2530" }
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
        },
        { src: "@/plugins/yt.js", ssr: false }
    ],

    // Auto import components: https://go. nuxtjs.dev/config-components
    components: {
        dirs: ["~/components", "~/components/layout"]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/device",
        "@aceforth/nuxt-optimized-images",
        "@nuxtjs/google-analytics"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["nuxt-lazy-load", "@nuxtjs/google-fonts", "@nuxtjs/sitemap"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {
        base: routerBase
    },
    loading: `~/components/loading.vue`,
    optimizedImages: {
        optimizeImages: true
    },
    googleFonts: {
        families: {
            "Noto+Sans+TC": [300, 400, 700, 900]
        }
    },
    googleAnalytics: {
        id: "UA-105806387-11"
    }
};