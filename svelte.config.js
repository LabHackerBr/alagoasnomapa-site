import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		prerender: {default: true},
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: false
		}),
	},

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config