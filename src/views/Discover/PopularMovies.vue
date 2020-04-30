<template>
  <div class="popular-movies">
    <h1 class="popular-movies__title">Popular Movies</h1>
    <poster-carousel :movies="popularMovies" />
  </div>
</template>

<script>
import PosterCarousel from "@/components/PosterCarousel.vue";
import { FETCH_POPULAR_MOVIES } from "@/store/modules/listing/listing.types";
import { mapState } from "vuex";
export default {
  components: {
    PosterCarousel
  },
  async created() {
    await this.$store.dispatch(FETCH_POPULAR_MOVIES);
  },
  computed: {
    ...mapState({
      popularMovies: state => state.listing.popularMovies
    })
  }
};
</script>

<style lang="scss">
.popular-movies {
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
