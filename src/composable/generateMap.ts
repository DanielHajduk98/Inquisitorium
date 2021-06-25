import Arena from "rot-js/lib/map/arena";
import * as ROT from "rot-js";
import { onMounted, reactive } from "vue";

export default function generateMap(w: number, h: number): number[][] {
  const arena: Arena = new ROT.Map.Arena(w, h);
  const map: number[][] = reactive(new Array<number[]>(w));

  const setupMapArray = () => {
    for (let i = 0; i < w; i++) {
      map[i] = [];

      for (let j = 0; j < h; j++) {
        map[i][j] = 0;
      }
    }
  };

  const generateMap = () => {
    arena.create((x: number, y: number, val: number) => {
      map[x][y] = val;
    });
  };

  setupMapArray();
  generateMap();

  return map;
}
