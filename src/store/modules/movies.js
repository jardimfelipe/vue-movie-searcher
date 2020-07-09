import { GetList, GetDetails } from '@/services/movies';

export const state = {
  movieList: [],
  movieDetails: {},
  searchedMovie: '',
};

export const mutations = {
  SET_LIST(state, newList) {
    state.movieList = newList;
  },
  SET_MOVIE_DETAILS(state, newValue) {
    state.movieDetails = newValue;
  },
  ADD_TO_LIST(state, list) {
    state.movieList.push(...list);
  },
  SET_SEARCHED_MOVIE(state, newValue) {
    state.searchedMovie = newValue;
  },
};

export const actions = {
  async getMoviesList({ commit }, query) {
    const resp = await GetList(query);
    if (!resp.status === 200) return false;
    if (resp.data.Error) return 'not_found';
    commit('SET_LIST', resp.data.Search);
    commit('SET_SEARCHED_MOVIE', query.s);
    return 200;
  },
  async getMovieDetails({ commit }, movieId) {
    const resp = await GetDetails({ i: movieId });
    if (!resp.status === 200) return;
    commit('SET_MOVIE_DETAILS', resp.data);
  },
  async nextMoviePage({ commit }, query) {
    const resp = await GetList(query);
    if (!resp.status === 200) return false;
    if (resp.data.Error) {
      return resp.data.Error === 'Movie not found!' ? 'no_search' : 'request_error';
    }
    commit('ADD_TO_LIST', resp.data.Search);
    return 200;
  },
};

const movies = {
  namespaced: true,
  mutations,
  state,
  actions,
};
export default movies;
