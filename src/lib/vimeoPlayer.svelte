<script lang="ts">
	import Player from '@vimeo/player'
	import { onMount, createEventDispatcher } from 'svelte'

	const emit = createEventDispatcher()

	export let url: string
  export let autoplay = false
  export let loop = false
  export let ended = false

  $: url, loadVideo()

  let options = {
    url: url,
    autoplay: autoplay,
    loop: loop,
    muted: false,
    byline: false,
    controls: true,
    title: false,
    playsinline: true,
    responsive: true,
    keyboard: false,
    pip: false,
    portrait: false
  }

	let playerDiv: HTMLDivElement
  let player: Player
  let currentDuration = 0

	const playerSetup = () => {
		player.on('loaded', () => emit("loaded"))
		player.on('durationchange', (response: {duration: number}) => {
      currentDuration = response.duration
      emit("durationchange", currentDuration)
    })
		player.on('bufferstart', () => emit("bufferstart"))
		player.on('bufferend', () => emit("bufferend"))
		player.on('progress', (data: currentTime) => emit("progress", data))
		player.on('play', () => emit("play"))
		player.on('playing', () => emit("playing"))
		player.on('pause', () => emit("pause"))
		player.on('timeupdate', (data: currentTime) => emit("timeupdate", data))
		player.on('ended', () => emit("ended"))
    player.on('error', (e: Error) => {
      if(e.name = 'NotAllowedError') {
        muted.mute()
        player.play()
      }
			console.log('error', e)
    })
    if(loop) player.setLoop(true)
	}

	export const play = () => {	player.play()	}
	export const pause = () => { player.pause() }

  export const getDuration = () => currentDuration

	export const togglePlay = () => {
		player.getPaused().then((paused: boolean) => {
			if(paused) play()
			else pause()
		})
	}

  export const seekTo = (time: number) => {
		const newTime = time < 0 ? 0 :
										time > 1 ? currentDuration - 1 :
										time * currentDuration
		player.setCurrentTime(newTime)
	}

	export const getPlayer = () => player

  export const loadVideo = () => {
    if(!player) return
    player.loadVideo(`https://player.vimeo.com/video/${id}${key ? '?h=' + key : ''}`)
  }

	onMount(() => {
		player = new Player(playerDiv, options)
		player.ready().then(() => {
      playerSetup()
      player.getDuration()
        .then(
          duration => {
            currentDuration = duration
            emit("durationchange", currentDuration)
          }
        )
    })

    return () => {
      player.unload()
    }
	})

</script>

<div
  id="player"
  bind:this={playerDiv}>
</div>
