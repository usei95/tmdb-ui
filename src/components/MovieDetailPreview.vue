<template>
  <div class="movie-preview">
    <transition name="t-discover-info" appear mode="out-in">
      <div class="movie-preview-detail" :key="movie.backdrop_path">
        <h1 class="movie-preview-detail__title">{{ movie.title }}</h1>
        <h3 class="movie-preview-detail__original-title">
          {{ movie.original_title }}
        </h3>
        <h6>{{ releaseYear }}</h6>
        <p class="movie-preview-detail__description">
          {{ movie.overview }}
        </p>
      </div>
    </transition>

    <div class="movie-preview-backdrop" v-if="movie.backdrop_path">
      <transition name="t-discover-image" appear>
        <img
          class="movie-preview-backdrop__image"
          :key="backdropImageUrl"
          :src="backdropImageUrl"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    releaseYear() {
      const [year] = this.movie.release_date.split("-");
      return year;
    },
    backdropImageUrl() {
      const { VUE_APP_TMDB_BACKDROP_IMAGE_BASE_URL } = process.env;
      return VUE_APP_TMDB_BACKDROP_IMAGE_BASE_URL + this.movie.backdrop_path;
    }
  }
};
</script>

<style lang="scss">
.movie-preview {
  position: relative;
  width: 100%;
  margin-top: -140px;
  z-index: 1;
  &-backdrop {
    &__image {
      height: 145%;
      width: 100%;
      position: absolute;
      object-fit: cover;
      object-position: top center;
    }
    top: 0;
    right: 0;
    position: relative;
    height: 100%;
    width: 80%;
    position: absolute;
    z-index: 1;
    &::after {
      width: 100%;
      height: 145%;
      background-image: linear-gradient(90deg, $dark 1%, transparent 50%),
        linear-gradient(0deg, $dark 14%, transparent 24%);
      z-index: 1;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
    }
  }
  &-detail {
    padding: 45px;
    padding-top: 150px;
    display: flex;
    width: 650px;
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column;

    &__description {
      margin-top: 15px;
      text-align: left;
      line-height: 18px;
      opacity: 0.55;
    }
    &__title,
    &__original-title {
      margin-bottom: 5px;
    }
  }
  height: 50vh;
  min-height: 460px;
}
.t-discover-image {
  &-enter-active,
  &-leave-active {
    transition: 1.2s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
.t-discover-info {
  &-enter-active,
  &-leave-active {
    transition: 0.55s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
