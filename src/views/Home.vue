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
      if (validate) {
        this.getMoviesList({ s: this.searchQuery });
      }
    },
    async goToDetails(moveId) {
      this.$router.push({ name: 'MovieDetails', params: { id: moveId } });
    },
  },
  computed: {
    ...moviesComputed,
  },
  data() {
    return {
      searchQuery: '',
      queryRules: [(v) => !!v || 'Antes de pesquisar, forneça um nome'],
      mouseOverIndex: '',
    };
  },
};
</script>

<template>
  <div id="home">
    <v-row class="justify-center align-center">
      <v-col sm="12" md="6" xl="4">
        <v-form ref="form" @submit="submitForm">
          <v-text-field
            label="Digite sua busca"
            append-icon="mdi-magnify"
            :rules="queryRules"
            v-model="searchQuery"
            required
          />
          <v-btn class="mt-1" @click="submitForm">Enviar</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        xs="12"
        sm="6"
        md="4"
        v-for="(movie, index) in movieList"
        :key="`${movie.Title}-${index}`"
        style="position: relative"
      >
        <v-card
          elevation="10"
          @mouseover="mouseOverIndex = index"
          @mouseout="mouseOverIndex = ''"
          hover
        >
          <v-img :src="movie.Poster" />
          <Tooltip @clicked="goToDetails" :active="index === mouseOverIndex" :movie="movie" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
