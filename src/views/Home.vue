<script>
import Tooltip from '@/components/Tooltip.vue';
import { moviesComputed, moviesMethods } from '@/store/helpers/movies';

export default {
  components: {
    Tooltip,
  },
  methods: {
    ...moviesMethods,
    submitForm() {
      const validate = this.$refs.form.validate();
      if (!validate) return;
      this.currentPage = 1;
      this.getMoviesList({ s: this.searchQuery });
      this.searchedMovie = this.searchQuery;
    },
    async goToDetails(moveId) {
      this.$router.push({ name: 'MovieDetails', params: { id: moveId } });
    },
    onScroll() {
      const isOnBottom = document.documentElement.scrollTop + window.innerHeight
        === document.documentElement.offsetHeight;
      if (isOnBottom && this.searchedMovie) {
        this.currentPage += 1;
        this.nextMoviePage({ s: this.searchedMovie, page: this.currentPage });
      }
    },
  },
  computed: {
    ...moviesComputed,
    pagedMovieList() {
      const listNumber = this.maxList * this.currentPage;
      const list = this.movieList.filter((movie, index) => index < listNumber);
      return list;
    },
  },
  data() {
    return {
      searchQuery: '',
      searchedMovie: '',
      queryRules: [(v) => !!v || 'Antes de pesquisar, forneça um nome'],
      mouseOverIndex: '',
      maxList: 6,
      currentPage: 1,
    };
  },
  async mounted() {
    document.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<template>
  <div id="home">
    <v-row class="justify-center align-center">
      <v-col class="home-form" :class="{ 'to-top': movieList.length }" sm="12" md="6" xl="4">
        <v-form id="search-form" ref="form" color="secondary" @submit="submitForm">
          <v-text-field
            id="search-input"
            label="Digite sua busca"
            append-icon="mdi-magnify"
            :rules="queryRules"
            v-model="searchQuery"
            required
          />
        </v-form>
        <v-btn id="search-button" color="secondary" class="mt-1" @click="submitForm">Buscar</v-btn>
      </v-col>
    </v-row>
    <v-row id="movies-list" class="mt-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(movie, index) in pagedMovieList"
        :key="`${movie.Title}-${index}`"
        style="position: relative"
      >
        <v-card elevation="10" @mouseover="mouseOverIndex = index" @mouseout="mouseOverIndex = ''">
          <p class="mt-1 text-center" v-if="movie.Poster === 'N/A'">{{ movie.Title }}</p>
          <v-img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" />
          <v-img v-else src="@/assets/not-found.png" />
          <Tooltip @clicked="goToDetails" :active="index === mouseOverIndex" :movie="movie" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.home-form {
  position: relative;
  top: 20vh;
}

@keyframes toTop {
  from {
    top: 20vh;
  }
  to {
    top: -8px;
  }
}

.to-top {
  color: #ffffff;
  animation-duration: 0.5s;
  animation-name: toTop;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  width: 100%;
}
</style>
