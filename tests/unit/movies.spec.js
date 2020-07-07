import { actions, mutations } from '@/store/modules/movies';
import flushPromises from 'flush-promises';

jest.mock('@/services/movies.js', () => ({
  GetList: jest.fn().mockResolvedValue({
    status: 200,
    data: {
      Search: ['movie', 'movie'],
    },
  }),
  GetDetails: jest.fn().mockResolvedValue({
    status: 200,
    data: 'movie info',
  }),
}));

describe('movie actions', () => {
  it('should getMoviesList set list of movies calling SET_LIST', async () => {
    const mockedList = ['movie', 'movie'];
    const context = {
      commit: jest.fn(),
    };
    const query = { s: 'Movie' };
    actions.getMoviesList(context, query);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith('SET_LIST', mockedList);
  });

  it('should getMovieDetails set movie information calling SET_MOVIE_DETAILS', async () => {
    const mockedMovie = 'movie info';
    const context = {
      commit: jest.fn(),
    };
    const query = { i: '2d039' };
    actions.getMovieDetails(context, query);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith('SET_MOVIE_DETAILS', mockedMovie);
  });

  it('should nextMoviePage add movies to list calling ADD_TO_LIST', async () => {
    const mockedList = ['movie', 'movie'];
    const context = {
      commit: jest.fn(),
    };
    const query = { s: 'Movie' };
    actions.nextMoviePage(context, query);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith('ADD_TO_LIST', mockedList);
  });
});

describe('movie mutations', () => {
  it('set a list to state', async () => {
    const mockedList = ['movie', 'movie'];
    const state = {
      movieList: [],
    };
    mutations.SET_LIST(state, mockedList);
    expect(state.movieList).toBe(mockedList);
  });

  it('Set a movie to state', async () => {
    const mockedMovie = 'Movie';
    const state = {
      movieDetails: '',
    };
    mutations.SET_MOVIE_DETAILS(state, mockedMovie);
    expect(state.movieDetails).toBe(mockedMovie);
  });

  it('Add more movies to the list', async () => {
    const mockedList = ['more movies', 'more movies'];
    const state = {
      movieList: ['movie', 'movie'],
    };
    expect(state.movieList.length).toBe(2);
    mutations.ADD_TO_LIST(state, mockedList);
    expect(state.movieList.length).toBe(4);
  });
});
