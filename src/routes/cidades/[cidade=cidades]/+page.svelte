<script lang="ts">
  import { page } from "$app/stores"
	import { base } from "$app/paths"
  import Social from "$lib/social.svelte"
  import VimeoPlayer from '$lib/vimeoPlayer.svelte'

  export let data: currentCity
</script>

<article
  class="flex flex-row-reverse w-full max-w-screen-2xl p-8
        portrait:flex-col portrait:p-0 portrait:text-center">
  {#if data.city.hasOwnProperty('media')}
  <div class="w-2/3 aspect-video max-h-full max-w-full portrait:w-full bg-black">
    <VimeoPlayer url={data.city.media || ''} autoplay />
  </div>
  {/if}
  <div class="flex-grow flex flex-col justify-between px-8 portrait:px-0">
    <div class="mb-4 portrait:mb-0 portrait:p-4">
      <p class="uppercase text-[0.65rem] lg:text-sm portrait:text-sm">Bem vindes à cidade de</p>
      <h1 class="py-4 font-bold text-lg lg:text-3xl portrait:text-3xl">{data.city.name}</h1>
      <p class="text-xs lg:text-base portrait:text-base">{data.city.info}</p>
    </div>
    <div class="flex">
      <a class="button p-2 lg:p-3 portrait:p-3 text-xs lg:text-base portrait:text-base portrait:w-full" href="{base}/cidades/{$page.params.cidade}/1">
        Iniciar tour virtual
      </a>
    </div>
    <div class="hidden md:block portrait:block">
      <p class="my-6 text-[0.65rem] lg:text-sm portrait:text-sm uppercase font-thin">
        OU, SE PREFERIR VISITE OS CONTEÚDOS PRODUZIDOS NAS OFICINAS
      </p>
      <div class="flex portrait:justify-center pb-6 text-xs lg:text-base portrait:text-base">
        <Social />
      </div>
    </div>
  </div>
</article>