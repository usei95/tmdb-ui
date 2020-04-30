import MainNavbarMenu from "@/components/MainNavbarMenu";
import { shallowMount } from "@vue/test-utils";
describe("MainNavbarMenu", () => {
  it("should render component", () => {
    const wrapper = shallowMount(MainNavbarMenu, {
      stubs: ["router-link"]
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
