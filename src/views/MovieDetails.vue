<script>
import { moviesComputed, moviesMethods } from '@/store/helpers/movies';

export default {
  components: {},
  methods: {
    ...moviesMethods,
  },
  computed: {
    ...moviesComputed,
    movieRating() {
      return this.movieDetails.imdbRating / 2;
    },
  },
  data() {
    return {};
  },
  created() {
    this.getMovieDetails(this.$route.params.id);
  },
};
</script>

<template>
  <div id="movie-details">
    <v-row>
      <v-col md="4" class="d-none d-sm-flex">
        <v-card elevation="10">
          <v-img :src="movieDetails.Poster" />
        </v-card>
      </v-col>
      <v-col>
        <div class="movie-info mt-5">
          <!-- Titulo -->
          <h2>{{ movieDetails.Title }}</h2>
          <!-- Detalhes -->
          <span class="font-weight-light">{{
            `${movieDetails.Runtime} | ${movieDetails.Genre} | ${movieDetails.Released}`
          }}</span>
          <!-- Rating -->
          <div class="movie-info__rating">
            <v-rating
              class="mt-2"
              color="#ffc741"
              background-color="#ffc741"
              v-model="movieRating"
            />

            <span class="mt-2"
              ><small>{{ `${movieDetails.imdbRating} / 10` }}</small></span
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <b-col>
        <h2 class="mt-5">Sinopse</h2>
        <p>{{ movieDetails.Plot }}</p>
      </b-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__rating {
    display: flex;
    align-items: center;
  }
}
</style>
