import { SET_UPCOMING_MOVIES, SET_POPULAR_MOVIES } from "./listing.types";

export default {
  [SET_UPCOMING_MOVIES](state, payload) {
    state.upcomingMovies = payload;
  },
  [SET_POPULAR_MOVIES](state, payload) {
    state.popularMovies = payload;
  }
};
