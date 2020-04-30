import Discover from "@/views/Discover";
import { shallowMount } from "@vue/test-utils";
describe("Discover", () => {
  it("should render component", () => {
    const wrapper = shallowMount(Discover);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
