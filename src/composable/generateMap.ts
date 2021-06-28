import Arena from "rot-js/lib/map/arena";
import * as ROT from "rot-js";
import Tile from "@/assets/scripts/Tile";

export default function generateMap(w: number, h: number): Tile[][] {
  const arena: Arena = new ROT.Map.Arena(w, h);

  /**
   * Creates empty 2d array to be used as frame for map
   * @return {Tile[][]} Empty 2d array with initialised size.
   */
  const setupMapArray = (): Tile[][] => {
    const array = new Array<Tile[]>(h);

    for (let i = 0; i < w; i++) {
      array[i] = new Array<Tile>(h);
    }
    return array;
  };

  const map: Tile[][] = setupMapArray();

  /**
   * Generates map and writes it to map
   */
  const generateMap = (): void => {
    arena.create((x: number, y: number, val: number) => {
      map[x][y] = new Tile(val ? "▓" : ".", !val);
    });
  };

  setupMapArray();
  generateMap();

  return map;
}
