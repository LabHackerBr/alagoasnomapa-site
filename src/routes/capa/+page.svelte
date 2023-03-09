<script>
	import { base } from "$app/paths"
	import Logos from "$lib/logos.svelte";
	import StateMap from "$lib/stateMap.svelte";
	import VimeoPlayer from "$lib/vimeoPlayer.svelte";
</script>

<div class="w-full flex flex-col text-white">
  <div class="relative flex flex-col lg:flex-row">
    <div class="absolute w-full h-full -z-10 bg-cyan-800">
      <img
        class="w-full h-full object-cover filter grayscale mix-blend-multiply"
        alt="alunos observando o trabalho de outro aluno em um computador na cidade de Coqueiro Seco"
        src="{base}/photos/foto_am_aula.jpg" />
    </div>
    <div class="flex-grow w-full flex items-center justify-center p-12 pb-0 lg:pb-12">
      <img
        class="max-h-52"
        alt="alagoas no mapa"
        src="{base}/imgs/logo_white.svg" />
    </div>
    <div class="flex-grow w-full flex items-center justify-center p-12">
      <p>
        <b>Alagoas no Mapa</b> &eacute; um projeto que estimula a cultura de
        colabora&ccedil;&atilde;o e participa&ccedil;&atilde;o em meios digitais nos
        munic&iacute;pios alagoanos, com o objetivo de mapear territ&oacute;rios f&iacute;sicos
        e afetivos e possibilitando que existam mais informa&ccedil;&otilde;es sobre
        Alagoas na rede (internet), incentivando a autonomia e o protagonismo social
        dos cidad&atilde;os, principalmente da juventude &ndash; convertendo-se em benef&iacute;cios
        para a sociedade e para o desenvolvimento sociocultural local.
      </p>
    </div>
  </div>
  <h1>Por onde passamos</h1>
  <div class="flex portrait:flex-col w-full h-full max-w-6xl mx-auto">
    <div class="flex-grow p-6 lg:p-20">
      <StateMap />
    </div>
    <div class="flex-grow flex flex-col justify-center lg:hidden pr-2 portrait:pr-0">
      <a href="{base}/cidades/coqueiroseco" class="button text-sm py-2 md:ml-3 mt-2">
        Coqueiro Seco
      </a>
      <a href="{base}/cidades/jequiadapraia" class="button text-sm py-2 md:ml-3">
        Jequiá da Praia
      </a>
      <a href="{base}/cidades/marechaldeodoro" class="button text-sm py-2 md:ml-3">
        Marechal Deodoro
      </a>
    </div>
  </div>
  <div class="aspect-video bg-theme-darkgray">
    <VimeoPlayer url="https://vimeo.com/791935581/b2346a0ff6" />
  </div>
  <footer class="flex justify-center portrait:flex-wrap my-4">
    <Logos />
  </footer>
</div>