<script>
import TopBar from '../components/TopBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <div>
    <top-bar />
    <v-container class="main-container">
        <slot/>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>
