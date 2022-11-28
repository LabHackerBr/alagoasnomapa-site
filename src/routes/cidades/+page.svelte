<script lang="ts">
  import Statemap from '$lib/stateMap.svelte'
</script>

<div class="absolute flex portrait:flex-col w-full h-full">
  <div class="flex-grow p-6 lg:p-20">
    <Statemap />
  </div>
  <div class="flex-grow flex flex-col lg:hidden pr-2 portrait:pr-0">
    <button class="button text-sm py-2 md:ml-3 mt-2">
      Coqueiro Seco
    </button>
    <button class="button text-sm py-2 md:ml-3">
      Jequiá da Praia
    </button>
    <button class="button text-sm py-2 md:ml-3">
      Marechal Deodoro
    </button>
    <button class="button text-sm py-2 md:ml-3 mt-auto">
      Sobre o Projeto
    </button>
  </div>
</div>