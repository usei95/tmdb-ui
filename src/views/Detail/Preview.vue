<template>
  <div class="preview" v-if="movieDetail.id">
    <movie-detail-preview :movie="movieDetail" />
    <video-card-list
      v-if="movieDetail.videos"
      :videos="movieDetail.videos.results"
      class="z-5 mt-20 pl-50"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_MOVIE_DETAIL } from "@/store/modules/detail/detail.types";
import VideoCardList from "@/components/VideoCardList";
import MovieDetailPreview from "@/components/MovieDetailPreview";

export default {
  components: {
    MovieDetailPreview,
    VideoCardList
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapState({
      movieDetail: state => state.detail.movieDetail
    })
  },
  async created() {
    await this.$store.dispatch(FETCH_MOVIE_DETAIL, { movieId: this.id });
  }
};
</script>
