<script lang="ts">
  import { cubicInOut } from 'svelte/easing'

  export let refresh = ""

  const slide = (node: HTMLElement, { duration = 0 }) => {
		return {
			duration,
			css: (t: number) => {
        const eased = cubicInOut(t)
        return `transform: translateX(${-(eased * 100 - 100)}%)`
      }
		}
	}

  const keep = (node: HTMLElement, { duration = 0 }) => {
		return {
			duration,
			css: (t: number) => {
        return `transform: translateX(0%)`
      }
		};
	}
</script>

{#key refresh}
  <div
    in:slide="{{ duration: 750 }}"
    out:keep="{{ duration: 750 }}"
    class="absolute top-0 left-0 w-full h-full bg-black">
    <slot />
  </div>
{/key}

