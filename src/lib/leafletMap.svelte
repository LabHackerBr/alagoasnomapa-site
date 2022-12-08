<script lang="ts">
  import { onMount } from 'svelte'
  import { LeafletMap, TileLayer, Marker, Icon } from 'svelte-leafletjs'
  import 'leaflet/dist/leaflet.css'

  export let mapData: slide[]
  export let currentSlide: number

  const mapOptions = {
        center: [mapData[currentSlide].location.lat, mapData[currentSlide].location.lon],
        zoom: mapData[currentSlide].location.zoom,
        attributionControl: false,
        zoomControl: false
    }
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19
    }

  let leafletMap: LeafletMap | undefined
  let mapElement: L.Map | undefined

  onMount(() => {
    mapElement = leafletMap?.getMap()
  })

  export const moveMap = () => {
    if(!mapElement) return
    mapElement.flyTo([mapData[currentSlide].location.lat, mapData[currentSlide].location.lon], mapData[currentSlide].location.zoom)
  }
</script>

<LeafletMap bind:this={leafletMap} options={mapOptions}>
    <TileLayer url={tileUrl} options={tileLayerOptions}/>
    {#each mapData as marker}
    <Marker latLng={[marker.location.lat, marker.location.lon]}>
      {#if marker.hasOwnProperty('icon')}
        <Icon options={marker.icon}/>
      {/if}
    </Marker>
    {/each}
</LeafletMap>
