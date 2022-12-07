<script lang="ts">
  import { page } from '$app/stores'

  $: currentSlide = $page.params.slide || 0
</script>

<section class="relative w-full h-full">
  <slot />
</section>