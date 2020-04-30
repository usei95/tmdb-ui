<template>
  <div class="upcoming-movies">
    <movie-preview v-if="selectedMovie" :movie="selectedMovie" />
    <h1 class="upcoming-movies__title">Upcoming Movies</h1>
    <poster-carousel
      @update-selected-movie="updateSelectedMovie"
      :movies="upcomingMovies"
    />
  </div>
</template>

<script>
import PosterCarousel from "@/components/PosterCarousel.vue";
import MoviePreview from "@/components/MoviePreview.vue";
import { FETCH_UPCOMING_MOVIES } from "@/store/modules/listing/listing.types";
import { mapState } from "vuex";
export default {
  components: {
    PosterCarousel,
    MoviePreview
  },
  data() {
    return {
      selectedMovie: null
    };
  },
  async created() {
    await this.$store.dispatch(FETCH_UPCOMING_MOVIES);
    this.selectedMovie = this.upcomingMovies[0];
  },
  computed: {
    ...mapState({
      upcomingMovies: state => state.listing.upcomingMovies
    })
  },
  methods: {
    updateSelectedMovie(movie) {
      this.selectedMovie = movie;
    }
  }
};
</script>

<style lang="scss">
.upcoming-movies {
  &__title {
    font-family: $font-family;
    font-weight: 500;
    font-size: 20px;
    padding-left: 45px;
    padding-bottom: 20px;
    position: relative;
    z-index: 1;
  }
}
</style>
