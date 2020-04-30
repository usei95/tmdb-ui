<template>
  <div class="main-layout">
    <main-navbar />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
export default {
  components: {
    MainNavbar
  }
};
</script>

<style lang="scss">
.main-layout {
  background: $dark;
  min-height: 100vh;
}
</style>
