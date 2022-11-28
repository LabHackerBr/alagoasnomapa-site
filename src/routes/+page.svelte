<div class="w-full h-full grid-layout p-6 portrait:p-0">
  <div class="logo px-6 portrait:self-end">
    <img
      src="/imgs/logo_full.svg"
      alt="Alagoas no Mapa" />
  </div>
  <div style="grid-area: a;">
    <p class="text-center p-6">
      <b>Alagoas no Mapa</b> &eacute; um projeto que estimula a cultura de
      colabora&ccedil;&atilde;o e participa&ccedil;&atilde;o em meios digitais nos
      munic&iacute;pios alagoanos.
    </p>
  </div>
  <div style="grid-area: b;" class="buttons flex-col px-6 md:flex-row md:mr-3 portrait:px-0">
    <a href="/cidades" class="button text-sm py-2 portrait:py-6">
      Conheça os Trabalhos
    </a>
    <button class="button text-sm py-2 md:ml-3">
      Sobre o Projetos
    </button>
  </div>
</div>

<style>
  .grid-layout {
    display: grid;
    grid-template:
      "logo" 1fr
      "a" 1fr
      "b" auto / 1fr;
  }
    .logo {
      grid-area: logo;
    }

  .grid-layout div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (orientation: landscape) {
    .grid-layout {
      grid-template:
            ". ." 1fr
            "logo a" auto
            "logo b" auto
            ". ." 1fr / 1fr 1fr;
    }
  }
</style>