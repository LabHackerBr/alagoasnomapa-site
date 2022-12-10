<script lang="ts">
  import { cubicInOut } from 'svelte/easing'

  export let key: number
  export let transitionDelay = 0

  let lastPage = -1
  let currentPage = 1
  let right = true

  $: key, changePage()

  const changePage = () => {
    setDirection()
  }

  const setDirection = () => {
    currentPage = key
    right = currentPage > lastPage
    lastPage = currentPage
  }

  const slide = (node: HTMLElement, {
    out = 1,
    delay = 0,
    duration = 0
  }) => {
    const o = +getComputedStyle(node).opacity
		return {
      delay,
			duration,
      out,
			css: (t: number) => {
        const eased = cubicInOut(t)
        return `transform: translateX(${out * (eased * 100 - 100)}%); opacity: ${t * o};`
      }
		}
	}
</script>

{#key currentPage}
<div
  in:slide="{{ out: right ? -1 : 1, duration: 500, delay: transitionDelay }}"
  out:slide="{{ out: right ? 1 : -1, duration: 500, delay: transitionDelay }}"
  class="absolute w-full h-full flex flex-col text-center top-0 z-[1000]">
  <slot />
</div>
{/key}