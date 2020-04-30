import Preview from "@/views/Detail/Preview";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { tmdbApiClient } from "@/services/tmdb.service";
import MockAdapter from "axios-mock-adapter";
import Vuex from "vuex";
import detail from "@/store/modules/detail";
import flushPromises from "flush-promises";
import getMovieDetailResponse from "../../__fixtures__/getMovieDetailResponse";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Preview", () => {
  const mock = new MockAdapter(tmdbApiClient);
  mock.onGet("/movie/1").reply(200, getMovieDetailResponse);

  it("should fetch movie detail", async () => {
    const store = new Vuex.Store({
      modules: { detail }
    });
    const wrapper = shallowMount(Preview, {
      localVue,
      store,
      stubs: ["router-link"],
      propsData: {
        id: 1
      }
    });
    await flushPromises();
    expect(wrapper.vm.movieDetail.id).toBe(1);
  });
});
