import { shallowMount } from "@vue/test-utils";
import PosterCarousel from "@/components/PosterCarousel";
import getPopularMoviesResponse from "../__fixtures__/getPopularMoviesResponse.js";
import Poster from "@/components/Poster";
describe("PosterCarousel", () => {
  const wrapper = shallowMount(PosterCarousel, {
    propsData: {
      movies: getPopularMoviesResponse.results
    }
  });
  it("should emit update-selected-movie when poster component emit mouseenter", () => {
    const poster = wrapper.find(Poster);
    poster.trigger("mouseenter");
    expect(wrapper.emitted()["update-selected-movie"]).toBeTruthy();
  });
});
