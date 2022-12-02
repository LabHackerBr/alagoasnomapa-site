import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
      fallback: 'index.html'
		}),
    appDir: 'internal'
	},

  preprocess: preprocess({
    postcss: true,
  }),
}

export default config