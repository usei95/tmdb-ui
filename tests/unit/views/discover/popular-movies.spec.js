import PopularMovies from "@/views/Discover/PopularMovies";
import { mount, createLocalVue } from "@vue/test-utils";
import { tmdbApiClient } from "@/services/tmdb.service";
import getPopularMoviesResponse from "../../__fixtures__/getPopularMoviesResponse";
import MockAdapter from "axios-mock-adapter";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import store from "@/store";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("PopularMovies", () => {
  const mock = new MockAdapter(tmdbApiClient);
  mock.onGet("/movie/popular").reply(200, getPopularMoviesResponse);
  it("should list popular movies", async () => {
    const wrapper = mount(PopularMovies, {
      localVue,
      store,
      stubs: ["router-link"]
    });
    await flushPromises();
    const moviePosters = wrapper.findAll(".poster");
    expect(moviePosters.length).toBe(getPopularMoviesResponse.results.length);
  });
});
