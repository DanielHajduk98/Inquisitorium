import { mount } from "@vue/test-utils";
import Map from "@/components/Map.vue";

describe("mapControls", () => {
  it("Should attach display to mapContainer", () => {
    const wrapper = mount(Map);

    const canvas = wrapper.find("canvas");
    expect(canvas.exists()).toBeTruthy();
  });
});
