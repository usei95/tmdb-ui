<template>
  <router-link :to="detailPath" class="poster">
    <img class="poster__image" :src="posterImageUrl" />
    <div class="poster__zoom">
      <span class="poster__title">{{ title }}</span>
      <span>
        <img src="@/assets/icons/play.svg" svg-inline class="poster__play" />
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    posterImageUrl() {
      const { VUE_APP_TMDB_POSTER_IMAGE_BASE_URL } = process.env;
      return VUE_APP_TMDB_POSTER_IMAGE_BASE_URL + this.image;
    },
    detailPath() {
      return "/main/detail/" + this.id;
    }
  }
};
</script>

<style lang="scss">
$poster-width: 240px;
$poster-height: 290px;
$poster-border-radius: 8px;
.poster {
  display: inline-block;
  position: relative;
  width: $poster-width;
  height: $poster-height;
  border-radius: $poster-border-radius;

  cursor: pointer;
  &:hover &__zoom {
    visibility: visible;
    opacity: 1;
  }
  &:hover &::after {
    opacity: 0;
    display: none;
  }
  &__image {
    width: $poster-width;
    height: $poster-height;
    object-fit: cover;
    object-position: center center;
    position: relative;
    border-radius: $poster-border-radius;
  }
  &__zoom {
    visibility: hidden;
    backdrop-filter: blur(15px);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    border-radius: $poster-border-radius;
    transition: linear 0.15s;
    background: rgba($dark, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  &__play {
    fill: $white;
    width: 64px;
    height: 64px;
  }
  &__title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 10px;
    width: calc(#{$poster-width} - 40px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    text-align: center;
  }
}
</style>
