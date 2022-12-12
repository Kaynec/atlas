<script setup lang="ts">
// const geoJson = new format.GeoJSON()
// import markerIcon from '@/assets/img/icons/marker.png'
// const format = inject('ol-format')

const center = ref([51.49292000000105, 35.82672111111167])
const projection = ref('EPSG:4326')
const zoom = ref(6.8)
const rotation = ref(0)
</script>

<template>
  <main grow>
    <div class="text flex-center-column py-5">
      <h1 text-blue font-700 text-2xl border-b-3 pb-2 border-blue>
        اطلس مراکز رشد
      </h1>
      <p text-1rem text-light font-500>
        جهت مشاهده اطلاعات هر مرکز بر روی آن کلیک نمایید.
      </p>
    </div>
    <ol-map ref="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height:82%;min-height:320px">
      <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  </main>
</template>
