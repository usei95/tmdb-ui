import MovieDetailPreview from "@/components/MovieDetailPreview";
import { shallowMount } from "@vue/test-utils";
import getPopularMoviesResponse from "../__fixtures__/getPopularMoviesResponse";
describe("MovieDetailPreview", () => {
  process.env = { VUE_APP_TMDB_BACKDROP_IMAGE_BASE_URL: "local" };
  const wrapper = shallowMount(MovieDetailPreview, {
    propsData: {
      movie: getPopularMoviesResponse.results[0]
    }
  });
  it("should generate correct image url", () => {
    expect(wrapper.vm.backdropImageUrl).toBe(
      "local" + getPopularMoviesResponse.results[0].backdrop_path
    );
  });
  it("should parse release year correct", () => {
    expect(wrapper.vm.releaseYear).toBe("2020");
  });
});
