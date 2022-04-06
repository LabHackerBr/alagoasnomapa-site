<script lang="ts">
  import { browser } from '$app/env'  
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import cidades from '$lib/data/cidades'

  if(browser && !cidades.hasOwnProperty($page.params.cidade)) goto("/")
  
  const mapLink = $page.params.cidade in cidades ? cidades[$page.params.cidade].link : ''
</script>

{#if mapLink !== ''}
  <iframe 
    class="w-full h-full"
    title="Mapa Afetivo de Coqueiro Seco"
    src="https://uploads.knightlab.com/storymapjs/c35fa21be0f6ec151b0aa2c5425efc86/{mapLink}/index.html" />
{/if}