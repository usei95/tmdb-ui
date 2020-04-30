import MainNavbar from "@/components/MainNavbar";
import { shallowMount } from "@vue/test-utils";
describe("MainNavbar", () => {
  it("should render navbar correct", () => {
    const wrapper = shallowMount(MainNavbar, {
      stubs: ["router-link"]
    });
    const user = wrapper.find(".main-navbar-user").text();
    expect(user).toBe("AA");
  });
});
