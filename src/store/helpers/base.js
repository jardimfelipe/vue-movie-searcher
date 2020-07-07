import { mapState, mapActions } from 'vuex';

export const baseMethods = mapActions('base', ['setLoading']);

export const baseComputed = {
  ...mapState('base', ['isLoading']),
};
