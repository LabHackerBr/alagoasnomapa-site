<script lang="ts">
  import { page } from "$app/stores"
	import { base } from "$app/paths"
  import VimeoPlayer from '$lib/vimeoPlayer.svelte'

  export let data: currentCity
  $: currentSlide = parseInt($page.params.slide)
</script>

<article class="flex flex-col text-center min-h-full">
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
    <p class="bg-theme-gray py-3">{@html data.city.slides[currentSlide].text.text}</p>
  </div>
</article>