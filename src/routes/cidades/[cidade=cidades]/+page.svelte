<script lang="ts">
  import { page } from "$app/stores"
	import { base } from "$app/paths"
  import Social from "$lib/social.svelte"
  import VimeoPlayer from '$lib/vimeoPlayer.svelte'

  export let data: currentCity
</script>

<article class="flex flex-col text-center justify-around min-h-full">
  {#if data.city.slides[0].media.url !== ""}
    <VimeoPlayer url={data.city.slides[0].media.url} autoplay />
  {/if}
  <div class="p-6">
    <p class="uppercase">Bem vindes à cidade de</p>
    <h1 class="py-4 font-bold text-3xl">{data.city.name}</h1>
    <p>{data.city.info}</p>
  </div>
  <a class="button py-3" href="{base}/cidades/{$page.params.cidade}/1">
    Iniciar tour virtual
  </a>
  <div>
    <p class="my-6 text-sm uppercase font-thin">
      OU, SE PREFERIR VISITE OS CONTEÚDOS PRODUZIDOS NAS OFICINAS
    </p>
    <div class="flex justify-center pb-6">
      <Social />
    </div>
  </div>
</article>
