import { GetList, GetDetails } from '@/services/movies';

export const state = {
  movieList: [],
  movieDetails: {},
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
};

export const actions = {
  async getMoviesList({ commit }, query) {
    const resp = await GetList(query);
    if (resp.status === 200) commit('SET_LIST', resp.data.Search);
  },
  async getMovieDetails({ commit }, movieId) {
    const resp = await GetDetails({ i: movieId });
    if (!resp.status === 200) return;
    commit('SET_MOVIE_DETAILS', resp.data);
  },
  async nextMoviePage({ commit }, query) {
    const resp = await GetList(query);
    if (resp.status === 200 && resp.data.Search) commit('ADD_TO_LIST', resp.data.Search);
  },
};

const movies = {
  namespaced: true,
  mutations,
  state,
  actions,
};
export default movies;
