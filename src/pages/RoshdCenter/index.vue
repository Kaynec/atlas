<!-- <script setup lang="ts">
// const geoJson = new format.GeoJSON()
// import markerIcon from '@/assets/img/icons/marker.png'
// const format = inject('ol-format')

const center = ref([51.49292000000105, 35.82672111111167]);
const projection = ref("EPSG:4326");
const zoom = ref(6.8);
const rotation = ref(0);
</script>

<template>
  <main grow>
    <div class="text flex-center-column py-5">
      <h1 text-primary font-700 text-2xl border-b-3 pb-2 border-primary>
        اطلس مراکز رشد
      </h1>
      <p text-1rem text-light font-500>
        جهت مشاهده اطلاعات هر مرکز بر روی آن کلیک نمایید.
      </p>
    </div>
    <ol-map
      ref="map"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="height: 75%; min-height: 320px"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />
      <ol-overlay :position="[51.49292000000105, 35.82672111111167]">
        <template v-slot="slotProps">
          <div class="overlay-content">
            Hello world!<br />
            Position: {{ slotProps.position }}
          </div>
        </template>
      </ol-overlay>

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  </main>
</template> -->

<template>
  <ol-map
    ref="map"
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 500px"
    v-loading.lock="isLoading"
    @singleclick="onClick"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature
          @click="handleMarkerClick"
          v-for="item in items"
          :key="item.id"
        >
          <ol-geom-point :coordinates="item.cordinates"></ol-geom-point>
          <ol-style @click="handleMarkerClick">
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
                @click="handleMarkerClick"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { GrowthCenter } from "@/types";
//

const { data: items, isLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch("growth-center/center-user/").json();
    return data.value as GrowthCenter[];
  },
  queryKey: ["roshd-center"],
  select: (data: GrowthCenter[]) => {
    if (!data) return data;
    data.forEach((element) => {
      element.cordinates = [element.longitude, element.latitude];
    });
    return data as GrowthCenter[];
  },
});

const handleMarkerClick = () => {
  console.log("dd");
};

const center = ref([51.49292000000105, 35.82672111111167]);

const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);
const radius = ref(20);
const strokeWidth = ref(5);
const strokeColor = ref("red");
const fillColor = ref("white");
const map = ref();
const router = useRouter();
const onClick = (e) => {
  if (!e.coordinate) return;
  const cordinates = e.coordinate.map((el) => Math.floor(el));
  items.value?.forEach((el) => {
    const cordinatesOfItem = el.cordinates?.map((el) => Math.floor(el));

    if (!cordinatesOfItem?.[0] || !cordinatesOfItem?.[1]) return;
    if (
      cordinatesOfItem[0] === cordinates[0] &&
      cordinatesOfItem[1] === cordinates[1]
    ) {
      router.push({
        name: "RoshdCenter-id",
        params: {
          id: el.id,
        },
      });
    }
  });
};

//
// onMounted(() => {
//   var featureListener = function (event) {
//     console.log("featureListenerCalled");
//     alert("Feature Listener Called");
//   };
// });
</script>
