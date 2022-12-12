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

<article class="grid min-h-full w-full">
  <div class="video relative aspect-video bg-black overflow-hidden">
  {#if data.city.slides[currentSlide].media.url !== ''}
    <SlideTransition key={currentSlide} transitionDelay={150}>
      {#if data.city.slides[currentSlide].media.type === 'video'}
      <div class="aspect-video bg-black">
        <VimeoPlayer url={data.city.slides[currentSlide].media.url} autoplay />
      </div>
      {:else}
      <img class="w-full h-full object-cover" src="/photos/{data.city.slides[currentSlide].media.url}" alt={data.city.slides[currentSlide].media.credit} />
      {/if}
    </SlideTransition>
  {/if}
  </div>

  <div class="map relative aspect-video bg-green-300">
    {#if browser}
    <svelte:component this={LeafletContainer} bind:this={map} mapData={data.city.slides} {currentSlide} />
    {/if}
    <div class="absolute top-0 left-0 w-full h-full z-[500]"></div>
  </div>

  <div class="city relative overflow-hidden">
    <SlideTransition key={currentSlide}>
      <div class="w-full h-full p-8 flex items-center text-left portrait:text-center portrait:py-3 portrait:px-0">
        <div class="flex-grow px-2">
          <p class="uppercase text-xs lg:text-base">{data.city.name}</p>
          <h1 class="pt-1 font-bold text-lg lg:text-2xl">{data.city.slides[currentSlide].text.headline}</h1>
        </div>
      </div>
    </SlideTransition>
  </div>

  <div class="info relative overflow-x-hidden min-h-[30vh] lg:min-h-0 bg-white">
    <SlideTransition key={currentSlide} transitionDelay={300}>
      <div class="w-full h-full p-8 lg:flex items-center block text-left">
        <div class="pb-10 lg:pb-0">
          {@html data.city.slides[currentSlide].text.text}
        </div>
      </div>
    </SlideTransition>
  </div>

  <div class="arrow-left flex items-center justify-center">
    {#if currentSlide > 0}
    <a
      class="flex items-center justify-center w-10 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide}">
      <img class="w-full transform rotate-180" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-10"></div>
    {/if}
  </div>

  <div class="arrow-right flex items-center justify-center right-0 bg-white">
    {#if currentSlide < data.city.slides.length - 2}
    <a
      class="flex items-center justify-center w-10 text-white"
      href="{base}/cidades/{$page.params.cidade}/{currentSlide + 2}">
      <img class="w-full" src="/imgs/seta.svg" alt="Proximo slide" />
    </a>
    {:else}
    <div class="w-10"></div>
    {/if}
  </div>
</article>

<style>
  article {
    grid-template:  "video video map map" auto
                    "al city info ar" 1fr / 2.5rem 1fr 1fr 2.5rem;
  }

  .video { grid-area: video; }
  .map { grid-area: map; }
  .city { grid-area: city; }
  .info { grid-area: info; }

  .arrow-left { grid-area: al; }
  .arrow-right { grid-area: ar; }

  @media (orientation: portrait) {
    article {
      grid-template:  "al city ar"        6rem
                      "video video video" auto
                      "map map map"       auto
                      "info info info"    1fr / 2rem 1fr 2rem;
    }
  }
</style>