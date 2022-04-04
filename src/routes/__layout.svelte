<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply w-full h-full;
	}
</style>
