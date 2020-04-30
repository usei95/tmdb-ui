<template>
  <div class="detail">
    <preview :id="movieId" />
  </div>
</template>

<script>
import Preview from "./Preview";
export default {
  components: {
    Preview
  },
  computed: {
    movieId() {
      return this.$route.params.movieId;
    }
  }
};
</script>
