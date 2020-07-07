import { actions, mutations } from '@/store/modules/base';

describe('base actions', () => {
  it('setLoading should call SET_LOADING when triggered', () => {
    const context = {
      commit: jest.fn(),
    };
    const query = false;
    actions.setLoading(context, query);
    expect(context.commit).toHaveBeenCalledWith('SET_LOADING', query);
  });
});

describe('base mutations', () => {
  it('SET_LOADING should set isLoading state', async () => {
    const newState = true;
    const state = {
      isLoading: false,
    };
    mutations.SET_LOADING(state, newState);
    expect(state.isLoading).toBe(newState);
  });
});
