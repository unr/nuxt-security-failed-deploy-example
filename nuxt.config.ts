// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

	modules: ['nuxt-security'],
	
	security: {
		headers: {
			crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "credentialless",
			crossOriginResourcePolicy: "crossorigin",
			crossOriginOpenerPolicy: "same-origin",
			contentSecurityPolicy: {
				"style-src": ["'self'", "'unsafe-inline'"],
				"script-src-attr": ["'self'", "'unsafe-inline'"],
				"script-src-elem": ["'self'", "'unsafe-inline'"],
				"img-src": [
					"'self'",
					"'unsafe-inline'",
					"data:",
					"https://res.cloudinary.com",
					"https://*.site.com",
				],
				"frame-ancestors": [
					"'self'",
					"https://*.site.com",
					"http://localhost:3000"
				]
			}
		}
	},

})
