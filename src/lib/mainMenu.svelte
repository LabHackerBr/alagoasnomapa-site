<script>
	import { page } from "$app/stores"
  import { navigating } from '$app/stores'
	import { fly } from "svelte/transition"

  let menuOpen = false

  $: if($navigating) closeMenu()

  const closeMenu = () => menuOpen = false
</script>

{#if $page.url.pathname !== '/'}
<header
  transition:fly={{y: -80}}
  class="flex h-20 p-4">
  <img
    src="/imgs/logo_full.svg"
    alt="Alagoas no Mapa" />

  <button
    class="ml-auto hamburger"
    class:active={menuOpen}
    on:click={() => menuOpen = !menuOpen}>
    <div></div>
  </button>
</header>

<aside
  class="flex flex-col justify-between absolute top-20 right-0 bottom-0 w-full bg-white z-10
        transform {menuOpen ? '' : 'translate-x-full'} transition-all ease-in-out duration-500">
  <h1 class="center font-bold text-3xl pt-10 text-center">Coqueiro Seco</h1>
  <ol class="flex flex-col items-center text-lg">
    <li class="mb-8"><a href="https://www.instagram.com/alagoasnomapa/" rel="noreferrer" target="_blank">INSTAGRAM</a></li>
    <li class="mb-8"><a href="https://www.instagram.com/alagoasnomapa/" rel="noreferrer" target="_blank">FLICKR</a></li>
    <li class="mb-8"><a href="https://www.instagram.com/alagoasnomapa/" rel="noreferrer" target="_blank">YOUTUBE</a></li>
    <li class="mb-8"><a href="https://www.instagram.com/alagoasnomapa/" rel="noreferrer" target="_blank">CRÉDITOS</a></li>
  </ol>
  <div class="text-center pb-10">
    OU, SE PREFERIR,<br />
    <a href="/sobre" class="underline">CONHEÇA MELHOR O PROJETO</a>
  </div>
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