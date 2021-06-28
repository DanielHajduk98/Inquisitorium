<template>
  <div class="map-wrapper">
    <div ref="mapContainer" class="container center map-wrapper__inner"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import generateMap from "@/composable/generateMap";
import mapControls from "@/composable/mapControls";
import Tile from "@/assets/scripts/Tile";

export default defineComponent({
  name: "Map",

  setup() {
    const MAP_WIDTH = 15;
    const MAP_HEIGHT = 15;

    const map = ref<Tile[][]>(generateMap(MAP_WIDTH, MAP_HEIGHT));

    const mapContainer = mapControls(map, MAP_WIDTH, MAP_HEIGHT);

    return {
      map,
      mapContainer,
    };
  },
});
</script>

<style lang="scss">
.map-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

.map-wrapper__inner {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
