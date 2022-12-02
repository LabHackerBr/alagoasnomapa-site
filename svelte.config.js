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
      fallback: 'index.html',
      precompress: false
		}),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/alagoasnomapa-site",
    },
	},

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config