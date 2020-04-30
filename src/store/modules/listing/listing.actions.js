import tmdbService from "../../../services/tmdb.service";
import {
  FETCH_UPCOMING_MOVIES,
  SET_UPCOMING_MOVIES,
  FETCH_POPULAR_MOVIES,
  SET_POPULAR_MOVIES
} from "./listing.types";

export default {
  async [FETCH_UPCOMING_MOVIES]({ commit }) {
    const movies = await tmdbService.getUpcomingMovies();
    commit(SET_UPCOMING_MOVIES, movies);
  },
  async [FETCH_POPULAR_MOVIES]({ commit }) {
    const movies = await tmdbService.getPopularMovies();
    commit(SET_POPULAR_MOVIES, movies);
  }
};
