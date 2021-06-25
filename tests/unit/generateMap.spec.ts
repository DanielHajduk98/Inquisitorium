import { mount } from "@vue/test-utils";
import Map from "@/components/Map.vue";
import generateMap from "@/composable/generateMap";

describe("generateMap", () => {
  it("Should return array with map", () => {
    const wrapper = mount(Map);
    const generatedMap: number[][] = generateMap(3, 3);

    const expectedMap: number[][] = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    expect(generatedMap).toEqual(expectedMap);
    expect(generatedMap).toBeInstanceOf(Array);
  });
});
