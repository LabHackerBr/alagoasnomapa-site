<script lang="ts">
  import { browser } from '$app/environment'
	import { onMount } from 'svelte'
  import { page } from "$app/stores"
	import { base } from "$app/paths"
  import VimeoPlayer from '$lib/vimeoPlayer.svelte'

  let LeafletContainer

  onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/map.svelte')).default;
		}
	})

  export let data: currentCity
  $: currentSlide = parseInt($page.params.slide)
</script>

<div class="w-full h-full">
  {#if browser}
  <svelte:component this={LeafletContainer} mapData={data.city.slides} />
  {/if}
</div>

<article class="absolute w-full h-full flex flex-col text-center min-h-full
                top-0 z-[1000] bg-white bg-opacity-30">
  <div class="flex p-3 bg-theme-gray">
    {#if currentSlide > 1}
    <a
      class="flex items-center justify-center w-12 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide - 1}">
      <img class="w-3 transform rotate-180" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-12"></div>
    {/if}
    <div>
      <p class="uppercase text-xs">{data.city.name}</p>
      <h1 class="pt-1 font-bold text-xl">{data.city.slides[currentSlide].text.headline}</h1>
    </div>
    {#if currentSlide < data.city.slides.length - 1}
    <a
      class="flex items-center justify-center w-12 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide + 1}">
      <img class="w-3" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-12"></div>
    {/if}
  </div>
  <div class="p-3">
    {#if data.city.slides[currentSlide].media.url !== ""}
      <VimeoPlayer url={data.city.slides[currentSlide].media.url} autoplay />
    {/if}
    <!-- <p class="bg-theme-gray py-3">{@html data.city.slides[currentSlide].text.text}</p> -->
  </div>
</article>