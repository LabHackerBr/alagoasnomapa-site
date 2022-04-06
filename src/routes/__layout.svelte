<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ url }) => {
    return { props: { key: url.pathname } }
  }
</script>


<script lang="ts">
	import PageTransition from '$lib/pageTransition.svelte'
	import '../app.css'

	export let key: string
</script>

<main>
	<PageTransition refresh={key}>
		<slot />
	</PageTransition>
</main>

<style lang="postcss">
	main {
		@apply relative w-full h-full overflow-x-hidden;
	}
</style>
