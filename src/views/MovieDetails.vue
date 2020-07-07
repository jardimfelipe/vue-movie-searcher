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
  <div v-if="movieDetails.Poster" id="movie-details">
    <div class="background"></div>
    <v-row>
      <v-col md="4" class="d-none d-sm-flex">
        <v-card elevation="10">
          <v-img :src="movieDetails.Poster" />
        </v-card>
      </v-col>
      <v-col class="background-index">
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
              readonly
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
      <v-col>
        <h2 class="mt-5">Sinopse</h2>
        <p>{{ movieDetails.Plot }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.background-index {
  z-index: 2;
}
.movie-info {
  color: #f5f5f5;
}
.background {
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 64px;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #272727;
  }
}
</style>
