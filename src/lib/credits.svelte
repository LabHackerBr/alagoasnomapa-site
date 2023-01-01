<script lang="ts">
	import { page } from "$app/stores"
  import db from '$data/data'
	import SlideTransition from "$lib/slideTransition.svelte"

  let links = ['coqueiroseco', 'jequiadapraia', 'marechaldeodoro']
  $: currentKey = $page.params.cidade ? links.indexOf($page.params.cidade) : 0
  $: currentCity = db[links[currentKey]] as cidade
</script>

<p class="p-6">
  <b>Alagoas no Mapa</b> &eacute; um projeto que estimula a cultura de
  colabora&ccedil;&atilde;o e participa&ccedil;&atilde;o em meios digitais nos
  munic&iacute;pios alagoanos, com o objetivo de mapear territ&oacute;rios f&iacute;sicos
  e afetivos e possibilitando que existam mais informa&ccedil;&otilde;es sobre
  Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
  dos cidad&atilde;os, principalmente da juventude &ndash; convertendo-se em benef&iacute;cios
  para a sociedade e para o desenvolvimento sociocultural local.
</p>

<div class="relative">
  <SlideTransition key={currentKey}>
    <div class="flex py-2 bg-theme-gray items-center">
      <button
        class="flex items-center justify-center h-full text-white"
        on:click={() => currentKey = currentKey > 0 ? currentKey - 1 : links.length - 1}>
        <img class="w-8 transform rotate-180" src="/imgs/seta.svg" alt="Proximo slide" />
      </button>
      <div class="flex-grow">
        <h1 class="font-bold text-3xl my-4 text-center">{currentCity.name}</h1>
      </div>
      <button
        class="flex items-center justify-center h-full text-white"
        on:click={() => currentKey = currentKey < links.length - 1 ? currentKey + 1 : 0}>
        <img class="w-8" src="/imgs/seta.svg" alt="Proximo slide" />
      </button>
    </div>

    <div class="p-6 text-center">
      <h2 class="font-thin mb-6">{@html currentCity.info}</h2>

      {#each currentCity.about as credit}
        <h3 class="font-bold uppercase">{credit.section}</h3>
        {#each credit.values as role}
          <h4 class="font-bold uppercase mt-4">{role.title}</h4>
          <ol>
            {#each role.names as name}
              <li>{name}</li>
            {/each}
          </ol>
        {/each}
      {/each}
    </div>
  </SlideTransition>
</div>