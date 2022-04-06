<script lang="ts">
  import { base } from "$app/paths"
  import { browser } from '$app/env'  
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import cidades from  '$lib/data/cidades'
  import Credits from '$lib/credits.svelte'
  import Icon from '@iconify/svelte'
import { onMount } from "svelte";

  let cityInfos = {}
  let smallScreen = browser && window.innerWidth < 768

  if($page.params.cidade in cidades) cityInfos = cidades[$page.params.cidade]
  else if(browser) goto("/")

  onMount (() => {
    window.addEventListener('resize', () => smallScreen = window.innerWidth < 768)
    return () => window.removeEventListener('resize', () => smallScreen = window.innerWidth < 768)
  })
</script>

<a
  href="{base}/{$page.params.cidade}"
  class="fixed top-4 right-4 w-8 transition-colors">
  <Icon width="100%" icon="ci:off-close" />
</a>
<div class="max-w-4xl mx-auto py-32 px-8 text-center">
  <img src="/logo_full.jpg" alt="logo do projeto representando o mapa de alagoas" />
  <p>
    <b>Alagoas no Mapa</b> &eacute; um projeto que estimula a cultura de
    colabora&ccedil;&atilde;o e participa&ccedil;&atilde;o em meios digitais nos
    munic&iacute;pios alagoanos, com o objetivo de mapear territ&oacute;rios f&iacute;sicos
    e afetivos e possibilitando que existam mais informa&ccedil;&otilde;es sobre
    Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
    dos cidad&atilde;os, principalmente da juventude &ndash; convertendo-se em benef&iacute;cios
    para a sociedade e para o desenvolvimento sociocultural local.&nbsp;
  </p>
  {#if Object.keys(cityInfos).length > 0}
  <Credits infos={cityInfos} />
  {/if}
  <h2 class="mt-12 text-lg">Saiba mais:</h2>
  <div class="links flex justify-center mt-2">
    <a href="https://www.instagram.com/alagoasnomapa/"><Icon width="100%" icon="bxl:instagram" /></a>
    <a href="https://www.flickr.com/photos/195400239@N08/albums"><Icon width="100%" icon="bxl:flickr-square" /></a>
    <a href="https://www.youtube.com/channel/UCvzcof2jkHkWY756hJiw-ZQ"><Icon width="100%" icon="bxl:youtube" /></a>
  </div>
  <h2 class="text-lg mt-12">Realização:</h2>
  <img
  class="w-40 mx-auto md:w-full mt-6"
    src="/reguaAldir2022{smallScreen ? '_vert' : ''}.jpg" 
    alt="As oficinas realizadas em coqueiro seco foram financiadas através da verba da Lei Federal Aldir Blanc"
    />
</div>


<style lang="postcss">
  .links a {
    @apply mr-3;
  }
</style>