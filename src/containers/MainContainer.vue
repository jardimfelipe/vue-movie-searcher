<script>
import Footer from '@/components/Footer.vue';
import { baseComputed } from '@/store/helpers/base';

export default {
  name: 'App',
  components: {
    Footer,
  },
  computed: {
    ...baseComputed,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <div>
    <v-progress-linear
      v-if="isLoading"
      :active="isLoading"
      :indeterminate="isLoading"
      absolute
      top
    ></v-progress-linear>
    <v-container class="main-container">
      <slot />
    </v-container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 64px);
}
</style>
