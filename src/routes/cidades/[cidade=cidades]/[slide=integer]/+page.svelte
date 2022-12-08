<script lang="ts">
  import { browser } from '$app/environment'
	import { onMount } from 'svelte'
  import { page } from "$app/stores"
	import { base } from "$app/paths"
  import VimeoPlayer from '$lib/vimeoPlayer.svelte'
	import SlideTransition from '$lib/slideTransition.svelte'

  let LeafletContainer
  let map

  onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('$lib/leafletMap.svelte')).default;
		}
	})

  export let data: currentCity
  $: currentSlide = parseInt($page.params.slide) - 1 | 0
</script>

<div class="w-full h-full relative">
  {#if browser}
  <svelte:component this={LeafletContainer} bind:this={map} mapData={data.city.slides} {currentSlide} />
  {/if}
  <div class="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30" />
</div>
<SlideTransition on:pannelOut={() => map.moveMap()} key={currentSlide} transitionDelay={1500}>
  <div class="flex p-2 bg-theme-gray">
    {#if currentSlide > 0}
    <a
      class="flex items-center justify-center w-8 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide}">
      <img class="w-3 transform rotate-180" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-12"></div>
    {/if}
    <div class="flex-grow">
      <p class="uppercase text-xs">{data.city.name}</p>
      <h1 class="pt-1 font-bold text-xl">{data.city.slides[currentSlide].text.headline}</h1>
    </div>
    {#if currentSlide < data.city.slides.length - 2}
    <a
      class="flex items-center justify-center w-8 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide + 2}">
      <img class="w-3" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-12"></div>
    {/if}
  </div>
  <div class="flex-grow flex flex-col p-3 overflow-y-auto">
    {#if data.city.slides[currentSlide].media.url !== ''}
      {#if data.city.slides[currentSlide].media.type === 'video'}
      <div class="aspect-video bg-black">
        <VimeoPlayer url={data.city.slides[currentSlide].media.url} autoplay />
      </div>
      {:else}
      <img class="w-full" src="/photos/{data.city.slides[currentSlide].media.url}" alt={data.city.slides[currentSlide].media.credit} />
      {/if}
    {/if}
    <p class="bg-theme-gray p-3">{@html data.city.slides[currentSlide].text.text}</p>
  </div>
</SlideTransition>