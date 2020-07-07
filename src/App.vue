<script>
import MainContainer from './containers/MainContainer.vue';

export default {
  name: 'App',
  components: {
    MainContainer,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <main-container>
      <transition name="fade-transition" mode="out-in">
        <RouterView :key="$route.name" />
      </transition>
    </main-container>
  </v-app>
</template>
