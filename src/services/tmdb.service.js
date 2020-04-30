import axios from "axios";

const { VUE_APP_TMDB_API_BASE, VUE_APP_TMDB_API_KEY } = process.env;
export const tmdbApiClient = axios.create({
  baseURL: VUE_APP_TMDB_API_BASE,
  params: { api_key: VUE_APP_TMDB_API_KEY, region: "us" }
});

export default {
  async getUpcomingMovies() {
    const {
      data: { results: movies }
    } = await tmdbApiClient.get("/movie/now_playing");
    return movies;
  },
  async getPopularMovies() {
    const {
      data: { results: movies }
    } = await tmdbApiClient.get("/movie/popular");
    return movies;
  },
  async findMovieDetail(movieId) {
    const { data } = await tmdbApiClient.get("/movie/" + movieId, {
      params: {
        append_to_response: "videos"
      }
    });
    return data;
  }
};
