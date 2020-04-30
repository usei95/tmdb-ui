<template>
  <div class="discover">
    <upcoming-movies />
    <popular-movies class="mt-100 pb-100" />
  </div>
</template>

<script>
import UpcomingMovies from "./UpcomingMovies";
import PopularMovies from "./PopularMovies";

export default {
  name: "Discover",
  components: { UpcomingMovies, PopularMovies }
};
</script>
