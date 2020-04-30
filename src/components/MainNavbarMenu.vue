<template>
  <ul class="main-navbar-menu">
    <li
      class="main-navbar-menu__item"
      v-for="menuItem in menuItems"
      :key="menuItem.title"
    >
      <router-link
        class="main-navbar-menu__link"
        :to="menuItem.to"
        exact-active-class="link--active"
      >
        {{ menuItem.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Discover",
          to: "/main/discover"
        },
        {
          title: "TV Series",
          to: "/"
        },
        {
          title: "Movies",
          to: "/"
        },
        {
          title: "My List",
          to: "/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.main-navbar-menu {
  flex: auto;
  margin: 0 30px;
  &__item {
    display: inline;
    margin-right: 15px;
  }
  &__link {
    font-weight: 700;
    font-size: 15px;
    opacity: 0.5;
    transition: opacity 0.25s ease-in;
    &:hover {
      opacity: 0.75;
      color: $red;
    }
    &.link--active {
      color: $white;
      opacity: 1;
    }
  }
}
</style>
