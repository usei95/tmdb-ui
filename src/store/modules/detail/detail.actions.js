import { FETCH_MOVIE_DETAIL, SET_MOVIE_DETAIL } from "./detail.types";
import tmdbService from "../../../services/tmdb.service";

export default {
  async [FETCH_MOVIE_DETAIL]({ commit }, { movieId }) {
    const movieDetail = await tmdbService.findMovieDetail(movieId);
    commit(SET_MOVIE_DETAIL, movieDetail);
  }
};
