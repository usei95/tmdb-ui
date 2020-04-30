<template>
  <div class="video-card-list">
    <video-card v-for="video in videos" :key="video.key" :video="video" />
  </div>
</template>

<script>
import VideoCard from "./VideoCard.vue";
export default {
  components: {
    VideoCard
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.video-card-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .video-card {
    margin-bottom: 40px;
    margin-right: 40px;
  }
}
</style>
