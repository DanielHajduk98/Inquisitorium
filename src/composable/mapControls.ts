import * as ROT from "rot-js";
import { onMounted, Ref, ref } from "vue";
import Tile from "@/assets/scripts/Tile";

/**
 * Composition API module handling map rendering
 * @param {Tile[][]} [map] 2D Array of tiles
 * @param {number} [MAP_WIDTH] Full map width
 * @param {number} [MAP_HEIGHT] Full map height
 */
export default function mapControls(
  map: Ref<Tile[][]>,
  MAP_WIDTH: number,
  MAP_HEIGHT: number
): Ref<HTMLElement | null> {
  const display = ref<ROT.Display>(
    new ROT.Display({
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
    })
  );

  const mapContainer = ref<HTMLElement | null>(null);

  /**
   * Appends mapContainer with display's canvas
   * @param {ROT.Display} [display] Display object from ROT library
   */
  const attachDisplay = (display: ROT.Display): void => {
    if (mapContainer.value) {
      const wrapper = mapContainer.value;
      const container = display.getContainer();
      if (container) {
        wrapper.appendChild(container);
      }
    }
  };

  /**
   * Draws whole map on display
   * @param {Ref<Tile[][]>} [map] Reference to 2D array of Tile objects
   */
  const drawMap = (map: Tile[][]): void => {
    map.forEach((array, i) => {
      array.forEach((cell, j) => {
        display.value.draw(i, j, cell.char, null, null);
      });
    });
  };

  onMounted(() => {
    attachDisplay(display.value);
    drawMap(map.value);
  });

  return mapContainer;
}
