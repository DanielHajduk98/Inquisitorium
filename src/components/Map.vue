<template>
  <div class="container center">
    <div class="map" ref="mapRef">
      <div class="map-row" v-for="(row, index) in map" :key="index">
        <div
          :class="{
            'map-row__wall': cell === 1,
            'map-row__floor': cell === 0,
          }"
          v-for="(cell, jndex) in row"
          :key="jndex"
        >
          {{ cell ? "#" : "." }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import generateMap from "@/composable/generateMap";

export default defineComponent({
  name: "Map",

  setup() {
    const MAP_WIDTH = 15;
    const MAP_HEIGHT = 15;

    const map: number[][] = generateMap(MAP_WIDTH, MAP_HEIGHT);

    return {
      map,
    };
  },
});
</script>

<style lang="scss">
.map {
  font-family: polyducks_12x12, Monospaced, sans-serif;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
}

.map-row {
  display: inline-flex;

  &__wall {
    color: gray;
  }

  &__floor {
    color: lightgrey;
  }
}
</style>
