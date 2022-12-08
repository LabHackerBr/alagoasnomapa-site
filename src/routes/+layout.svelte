<script>
  import { page } from "$app/stores"
	import Logos from '$lib/logos.svelte'
	import MainMenu from '$lib/mainMenu.svelte'

  export const prerender = true

	import '../app.css'
</script>

<div class="relative w-screen h-screen flex flex-col overflow-hidden">
	<MainMenu />
	<main class="flex-grow bg-theme-gray portrait:bg-transparent relative overflow-y-auto z-0">
		<slot />
	</main>
  {#if !$page.params.hasOwnProperty('cidade')}
  <footer class="flex justify-center flex-wrap my-4">
    <Logos />
  </footer>
  {/if}
</div>
