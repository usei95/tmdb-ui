import { SET_MOVIE_DETAIL } from "./detail.types";

export default {
  [SET_MOVIE_DETAIL](state, payload) {
    state.movieDetail = payload;
  }
};
