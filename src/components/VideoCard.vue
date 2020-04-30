<template>
  <div class="video-card" @click="showPreviewModal">
    <img :src="thumbnailImageUrl" class="video-card__thumbnail" />
    <modal :visible.sync="isPreviewModalVisible">
      <div>
        <iframe
          type="text/html"
          width="640"
          height="360"
          :src="videoSourceUrl"
          frameborder="0"
        ></iframe>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      isPreviewModalVisible: false
    };
  },
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  components: {
    Modal
  },
  methods: {
    showPreviewModal() {
      this.isPreviewModalVisible = true;
    }
  },
  computed: {
    thumbnailImageUrl() {
      return (
        process.env.VUE_APP_YOUTUBE_THUMBNAIL_BASE_URL +
        this.video.key +
        "/hqdefault.jpg"
      );
    },
    videoSourceUrl() {
      return process.env.VUE_APP_YOUTUBE_VIDEO_BASE + this.video.key;
    }
  }
};
</script>

<style lang="scss">
.video-card {
  cursor: pointer;
  display: inline-block;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  overflow: hidden;
  &__thumbnail {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
