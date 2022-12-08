// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface currentTime {
  duration: number
  percent: number
  seconds: number
}

interface currentCity { city: cidade }

interface cidade {
  name: string
  info: string
  slides: slide[]
  about: credit[]
}

interface slide {
  location: {
    line: boolean
    lat: number
    lon: number
    zoom: number
  }
  icon?: {
    iconUrl: string
    iconSize: [number, number]
  }
  media: {
    type: "video" | "image"
    caption?: string
    credit?: string
    url: string
  }
  text: {
    headline: string,
    text: string
  }
}

interface credit {
  section: string
  values: {
    title: string
    names: string[]
  }[]
}