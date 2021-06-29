import { mount } from "@vue/test-utils";
import Map from "@/components/Map.vue";
import generateMap from "@/composable/generateMap";
import Tile from "@/assets/scripts/Tile";

describe("generateMap", () => {
  it("Should return array with map", () => {
    const wrapper = mount(Map);
    const generatedMap: Tile[][] = generateMap(3, 3);

    const wall = new Tile("▓", false);
    const floor = new Tile(".", true);

    const mockedMap: Tile[][] = [
      [wall, wall, wall],
      [wall, floor, wall],
      [wall, wall, wall],
    ];

    expect(generatedMap).toEqual(mockedMap);
    expect(generatedMap).toBeInstanceOf(Array);
  });
});
