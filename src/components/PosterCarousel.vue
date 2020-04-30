<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="movie in movies" :key="movie.id">
      <poster
        :id="movie.id"
        :title="movie.title"
        :image="movie.poster_path"
        @mouseenter.native="mouseEnterHandler(movie)"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Poster from "./Poster.vue";
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: { Swiper, SwiperSlide, Poster },
  data() {
    return {
      swiperOptions: {
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        pagination: false,
        autoPlay: {
          delay: 1200
        }
      }
    };
  },
  methods: {
    mouseEnterHandler(movie) {
      this.$emit("update-selected-movie", movie);
    }
  }
};
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
  padding-left: 45px;
}
.swiper-slide {
  width: 240px;
}
</style>
