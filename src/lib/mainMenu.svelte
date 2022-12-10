<script>
	import { base } from "$app/paths"
	import { page } from "$app/stores"
  import { navigating } from '$app/stores'
	import { fly } from "svelte/transition"
  import db from '$data/data'
	import Credits from "./credits.svelte";

  let isMenuOpen = false
  let isCreditsOpen = false

  $: if($navigating) closeMenu()

  const closeMenu = () => isMenuOpen = false
  const closeCredit = () => isCreditsOpen = false
</script>

{#if $page.url.pathname !== '/' && $page.url.pathname !== '/teste'}
<header
  transition:fly={{y: -80}}
  class="flex flex-grow-0 h-20 p-4">
  <a class="h-full aspect-[3/1]" href="{base}/cidades">
    <img
      class="h-full"
      src="{base}/imgs/logo_full.svg"
      alt="Alagoas no Mapa" />
  </a>
  <button
    class="ml-auto hamburger"
    class:active={isMenuOpen}
    on:click={() => isMenuOpen = !isMenuOpen}>
    <div></div>
  </button>
</header>

<aside
  class="flex flex-col justify-between absolute top-16 right-0 bottom-0 w-full bg-white z-50
        transform {isMenuOpen ? '' : 'translate-x-full'} transition-all ease-in-out duration-500"
        on:transitionend={closeCredit}>

  {#if isCreditsOpen}
  <div in:fly={{x: 300, opacity: 300, duration: 500}} class="absolute w-full h-full overflow-y-auto">
    <Credits />
  </div>

  {:else}

  <div out:fly={{x: -300, opacity: 300, duration: 500}} class="absolute w-full h-full flex flex-col">
    {#if $page.params.cidade}
    <a href="{base}/cidades/{$page.params.cidade}">
      <h1 class="center font-bold text-3xl pt-10 text-center">{db[$page.params.cidade].name}</h1>
    </a>
    {/if}

    <ol class="flex flex-col items-center text-lg my-auto">
      {#if $page.params.cidade}
      <li class="mb-8"><button on:click={() => isCreditsOpen = true}>CRÉDITOS</button></li>
      {/if}
      <li class="mb-8"><a href="https://www.instagram.com/alagoasnomapa/" rel="noreferrer" target="_blank">INSTAGRAM</a></li>
      <li class="mb-8"><a href="https://www.flickr.com/photos/195400239@N08/albums" rel="noreferrer" target="_blank">FLICKR</a></li>
      <li class="mb-8"><a href="https://www.youtube.com/channel/UCvzcof2jkHkWY756hJiw-ZQ" rel="noreferrer" target="_blank">YOUTUBE</a></li>
    </ol>
    <div class="text-center pb-10">
      OU, SE PREFERIR,<br />
      <a href="/sobre" class="underline">CONHEÇA MELHOR O PROJETO</a>
    </div>
  </div>
{/if}

</aside>
{/if}

<style type="postcss">
a:hover {
  @apply text-theme-secondary;
}

.hamburger.active > div {
  transform: rotate(135deg);
}

.hamburger.active > div:before,
.hamburger.active > div:after {
  top: 0;
  transform: rotate(90deg);
}

.hamburger.active > div:after {
  opacity: 0;
}

.hamburger.active > div {
  transform: rotate(225deg);
}

.hamburger {
  @apply z-10 aspect-square h-full px-2 flex items-center justify-center;

  transition: box-shadow 0.4s ease;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

.hamburger > div {
  @apply relative flex-none flex items-center justify-center w-full h-1 bg-theme-darkgray transition-all duration-500 ease-in-out;
}

.hamburger > div:before,
.hamburger > div:after {
  @apply absolute w-full h-1 left-0 -top-3 bg-theme-darkgray transition-all duration-500 ease-in-out;

  content: '';
}
.hamburger > div:after {
  @apply top-3;
}
</style>