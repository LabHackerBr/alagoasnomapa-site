<script>
	import MainMenu from '$lib/mainMenu.svelte'

  export const prerender = true

	import '../app.css'
</script>

<div class="relative w-screen h-screen flex flex-col overflow-hidden">
	<MainMenu />
	<main class="flex-grow bg-theme-gray portrait:bg-transparent relative overflow-y-auto z-0">
		<slot />
	</main>
</div>
