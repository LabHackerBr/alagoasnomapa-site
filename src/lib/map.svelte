<script lang="ts">
  import {LeafletMap, TileLayer, Marker} from 'svelte-leafletjs'
  import 'leaflet/dist/leaflet.css'

  export let mapData
  console.log(mapData)

  const mapOptions = {
        center: [mapData[1].location.lat, mapData[1].location.lon],
        zoom: mapData[1].location.zoom,
    }
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: "© OpenStreetMap contributors",
    }

    let leafletMap
</script>

<LeafletMap bind:this={leafletMap} options={mapOptions}>
    <TileLayer url={tileUrl} options={tileLayerOptions}/>
    {#each mapData as marker}
    <Marker latLng={[marker.location.lat, marker.location.lon]}/>
    {/each}
</LeafletMap>
