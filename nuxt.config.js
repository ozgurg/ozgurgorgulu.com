export default {
	env: {
		baseUrl: "https://ozgurgorgulu.com"
	},
	mode: "universal",
	target: "static",
	router: {
		linkActiveClass: "is-active",
		extendRoutes(routes, resolve) {
			routes.push({
				name: "404",
				path: "*",
				component: resolve(__dirname, "pages/404.vue")
			});
		}
	},
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },
			{ name: "format-detection", content: "telephone=no" },
			{ name: "msapplication-tap-highlight", content: "no" },
			{ "http-equiv": "X-UA-Compatible", "content": "ie=edge" },
			{ hid: "description", name: "description", content: process.env.npm_package_description || "" }
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.png" }
		]
	},
	components: true,
	buildModules: [
		"@nuxtjs/eslint-module"
	],
	css: [
		"~/assets/css/site.scss"
	],
	modules: [
		"@nuxtjs/sitemap",
		"nuxt-buefy",
		"@nuxt/content"
	],
	content: {
		liveEdit: false
	},
	buefy: {
		materialDesignIcons: false
	},
	sitemap: {
		hostname: "https://ozgurgorgulu.com",
		gzip: true,
		defaults: {
			changefreq: "monthly",
			priority: 1,
			lastmod: new Date()
		},
		exclude: [
			"/404"
		]
	}
};