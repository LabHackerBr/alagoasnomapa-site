import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import path from "path"

const config: UserConfig = {
	plugins: [sveltekit()],
  resolve: {
    alias: {
      $data: path.resolve("./src/data")
    }
  }
}

export default config
