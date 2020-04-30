import Poster from "@/components/Poster";
import { shallowMount } from "@vue/test-utils";
import getPopularMoviesResponse from "../__fixtures__/getPopularMoviesResponse";
describe("Poster", () => {
  process.env = { VUE_APP_TMDB_POSTER_IMAGE_BASE_URL: "local" };
  it("should render navbar correct", () => {
    const movie = getPopularMoviesResponse.results[0];
    const wrapper = shallowMount(Poster, {
      propsData: {
        image: movie.poster_path,
        title: movie.title,
        id: movie.id
      },
      stubs: ["router-link"]
    });
    expect(wrapper.vm.posterImageUrl).toBe("local" + movie.poster_path);
  });
});
