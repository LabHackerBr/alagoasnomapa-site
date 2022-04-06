<script lang="ts">
  import oficinas from '$lib/data/oficinas.json'

  export let infos
</script>

<h1>Cidade de {infos.cidade}</h1>
{#if 'slogan' in infos}
<h3 class="mb-6">{infos.slogan}</h3>
{/if}

{#each infos.oficinas as oficina}
<h2>{oficinas[oficina.nome].chamada} por:</h2>
<ol>
  {#each oficina.participantes as participante}
  <li>{participante}</li>
  {/each}
  <li><span class="font-bold">Sob orienta&ccedil;&atilde;o de:</span> {oficinas[oficina.nome].orientacao}</li>
</ol>
{/each}
  
  <h2>Textos foram feitos coletivamente sob orientação de:</h2>
  <p>Renata Czarny</p>

  {#each infos.extras as extra}
  <h2>{extra.titulo}:</h2>
  <ol>
    {#each extra.nomes as nome}
    <li>{nome}</li>
    {/each}
  </ol>
  {/each}

<h2 class="text-lg mb-6 mt-12">Agradecimentos</h2>
{#each infos.agradecimentos as agradecimento}
{#if 'titulo' in agradecimento}
<h2>{agradecimento.titulo}:</h2>
{/if}
<ol>
  {#each agradecimento.nomes as nome}
  <li>{nome}</li>
  {/each}
</ol>
{/each}
<h2 class="text-lg mt-12">Oficinas realizadas:</h2>
<ol>
  {#each infos.oficinas as oficina}
  <li>{oficina.nome} - {oficinas[oficina.nome].orientacao}</li>
  {/each}
</ol>