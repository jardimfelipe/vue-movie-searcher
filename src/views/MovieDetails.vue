<script>
import { moviesComputed, moviesMethods } from '@/store/helpers/movies';
import { baseComputed } from '@/store/helpers/base';

export default {
  methods: {
    ...moviesMethods,
  },
  computed: {
    ...moviesComputed,
    ...baseComputed,
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
    <div class="background"></div>
    <div v-if="!isLoading" class="movie-info">
      <v-row class="movie-info__cart">
        <v-col cols="12" md="3">
          <v-card elevation="10">
            <!-- Poster -->
            <v-img v-if="movieDetails.Poster !== 'N/A'" :src="movieDetails.Poster" />
            <v-img v-else src="@/assets/not-found.png" />
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
            <div class="movie-info__cart-rating">
              <v-rating
                class="mt-2"
                color="#db0000"
                readonly
                background-color="#db0000"
                v-model="movieRating"
              />

              <span class="mt-2"
                ><small>{{ `${movieDetails.imdbRating} / 10` }}</small></span
              >
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="movie-info__resume">
        <v-col cols="12" md="7">
          <div class="movie-info__resume-plot">
            <!-- Sinopse -->
            <h2 class="mt-5">Sinopse</h2>
            <p>{{ movieDetails.Plot }}</p>
          </div>
          <div class="movie-info__resume-cast">
            <h2 class="mt-5">Elenco</h2>
            <p>{{ movieDetails.Actors }}</p>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <div class="movie-info__resume-details">
            <!-- Detalhes -->
            <v-card tile>
              <v-list>
                <v-subheader>Detalhes</v-subheader>
              </v-list>
              <v-list-item>
                <strong>Data de lançamento </strong>
                {{ `: ${movieDetails.Released}` }}
              </v-list-item>
              <v-list-item>
                <strong>Diretor </strong>
                {{ `: ${movieDetails.Director}` }}
              </v-list-item>
              <v-list-item>
                <strong>País </strong>
                {{ `: ${movieDetails.Country}` }}
              </v-list-item>
              <v-list-item>
                <strong>Idioma </strong>
                {{ `: ${movieDetails.Language}` }}
              </v-list-item>
              <v-list-item>
                <strong>Produtora </strong>
                {{ `: ${movieDetails.Production}` }}
              </v-list-item>
              <v-list-item>
                <strong>Gênero </strong>
                {{ `: ${movieDetails.Genre}` }}
              </v-list-item>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click.prevent="$router.go(-1)" color="secondary" dark fixed bottom right fab>
            <v-icon>mdi-keyboard-return</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-index {
  z-index: 2;
}
.movie-info {
  &__cart {
    @media screen and (max-width: 768px) {
      color: #000000;
    }
    color: #f5f5f5;
    &-rating {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
.background {
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: #000000;
  }
}
</style>
