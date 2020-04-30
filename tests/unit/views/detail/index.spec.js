import Detail from "@/views/Detail";
import { shallowMount } from "@vue/test-utils";
describe("Detail", () => {
  it("should render component", () => {
    const wrapper = shallowMount(Detail, {
      mocks: {
        $route: {
          params: { movieId: 1 }
        }
      }
    });
    expect(wrapper.vm.movieId).toBe(1);
  });
});
