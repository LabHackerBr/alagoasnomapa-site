<script>
	import { page } from "$app/stores"
	import { fly } from "svelte/transition";
</script>

{#if $page.url.pathname !== '/'}
<header
  transition:fly={{y: -80}}
  class="flex h-20 p-4">
  <img
    src="/imgs/logo_full.svg"
    alt="Alagoas no Mapa" />
</header>
{/if}