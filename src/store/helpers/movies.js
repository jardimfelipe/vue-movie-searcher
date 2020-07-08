import { mapState, mapActions } from 'vuex';

export const moviesMethods = mapActions('movies', [
  'getMoviesList',
  'getMovieDetails',
  'nextMoviePage',
]);

export const moviesComputed = {
  ...mapState('movies', ['movieList', 'movieDetails', 'searchedMovie']),
};
