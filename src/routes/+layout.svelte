<script>
	import Logos from '$lib/logos.svelte'
	import MainMenu from '$lib/mainMenu.svelte'
  
  export const prerender = true

	import '../app.css'
</script>

<div class="w-screen h-screen flex flex-col overflow-hidden">
	<MainMenu />
	<main class="flex-grow bg-theme-gray portrait:bg-transparent relative">
		<slot />
	</main>
	<Logos />
</div>
