import UpcomingMovies from "@/views/Discover/UpcomingMovies";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { tmdbApiClient } from "@/services/tmdb.service";
import getUpcomingMoviesResponse from "../../__fixtures__/getUpcomingMoviesResponse";
import MockAdapter from "axios-mock-adapter";
import Vuex from "vuex";
import listing from "@/store/modules/listing";
import flushPromises from "flush-promises";
import Poster from "@/components/Poster";
import PosterCarousel from "@/components/PosterCarousel";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("UpcomingMovies", () => {
  const mock = new MockAdapter(tmdbApiClient);
  mock.onGet("/movie/now_playing").reply(200, getUpcomingMoviesResponse);

  const store = new Vuex.Store({
    modules: { listing }
  });

  const wrapper = shallowMount(UpcomingMovies, {
    localVue,
    store,
    stubs: {
      Poster,
      PosterCarousel,
      "router-link": "<div />"
    }
  });

  it("should list upcoming movies", async () => {
    await flushPromises();
    const moviePosters = wrapper.findAll(".poster");
    expect(moviePosters.length).toBe(getUpcomingMoviesResponse.results.length);
  });

  it("should update selected movie when carousel emits update-selected-movie", async () => {
    await flushPromises();
    const carousel = wrapper.find(PosterCarousel);
    carousel.vm.$emit("update-selected-movie", wrapper.vm.upcomingMovies[2]);
    expect(wrapper.vm.selectedMovie).toStrictEqual(
      wrapper.vm.upcomingMovies[2]
    );
  });
});
