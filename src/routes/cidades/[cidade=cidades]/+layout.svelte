<script lang="ts">
  import { page } from '$app/stores'

  $: currentSlide = $page.params.slide || 0
</script>

<section class="w-full h-full flex items-center justify-center">
  <slot />
</section>