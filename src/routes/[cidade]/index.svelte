<script lang="ts">
  import { base } from "$app/paths"
  import { browser } from '$app/env'  
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import cidades from '$lib/data/cidades'
  import Icon from '@iconify/svelte';

  if(browser && !cidades.hasOwnProperty($page.params.cidade)) goto("/")
  
  const mapLink = $page.params.cidade in cidades ? cidades[$page.params.cidade].link : ''
</script>

<div class="fixed top-6 right-0 p-2 flex flex-col-reverse z-20 bg-black bg-opacity-60 rounded-l-md
            md:flex-row md:top-4 md:right-4 md:p-0 md:bg-opacity-0">
  <a
    href="{base}/{$page.params.cidade}/creditos"
    class="w-8 transition-colors md:mr-4">
    <Icon width="100%" icon="raphael:info" />
  </a>
  <a
    href="/"
    class="w-8 transition-colors mb-2 md:mb-0">
    <Icon width="100%" icon="ci:off-close" />
  </a>
</div>

{#if mapLink !== ''}
  <iframe 
    class="w-full h-full"
    title="Mapa Afetivo de Coqueiro Seco"
    src="https://uploads.knightlab.com/storymapjs/c35fa21be0f6ec151b0aa2c5425efc86/{mapLink}/index.html" />
{/if}