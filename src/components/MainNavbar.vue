<template>
  <div class="main-navbar">
    <router-link to="/" class="main-navbar-link">
      <img
        svg-inline
        class="main-navbar-link__logo"
        src="@/assets/images/brands/logo.svg"
      />
    </router-link>
    <main-navbar-menu />
    <a class="main-navbar-user" href="#">
      AA
    </a>
  </div>
</template>

<script>
import MainNavbarMenu from "./MainNavbarMenu";
export default {
  components: {
    MainNavbarMenu
  }
};
</script>

<style lang="scss">
.main-navbar {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-link {
    &__logo {
      width: 120px;
      height: auto;
    }
  }
  &-user {
    background: $red;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 16px;
    color: $white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  position: relative;
  z-index: 2;
  padding: 45px;
}
</style>
