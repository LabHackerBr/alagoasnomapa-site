<script lang="ts">
	import { base } from '$app/paths'
  import Statemap from '$lib/stateMap.svelte'
</script>

<div class="absolute flex portrait:flex-col w-full h-full">
  <div class="flex-grow p-6 lg:p-20">
    <Statemap />
  </div>
  <div class="flex-grow flex flex-col justify-around lg:hidden pr-2 portrait:pr-0">
    <a href="{base}/cidades/coqueiroseco" class="button text-sm py-2 md:ml-3 mt-2">
      Coqueiro Seco
    </a>
    <a href="{base}/cidades/jequiadapraia" class="button text-sm py-2 md:ml-3">
      Jequiá da Praia
    </a>
    <a href="{base}/cidades/marechaldeodoro" class="button text-sm py-2 md:ml-3">
      Marechal Deodoro
    </a>
    <a href="{base}/sobre" class="button text-sm py-2 md:ml-3 mt-auto">
      Sobre o Projeto
    </a>
  </div>
</div>