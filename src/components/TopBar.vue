<script>
import { baseComputed } from '../store/helpers/base';

export default {
  computed: {
    ...baseComputed,
  },
};
</script>

<template>
  <div>
    <v-app-bar dark>
      <v-progress-linear
        v-if="isLoading"
        :active="isLoading"
        :indeterminate="isLoading"
        absolute
        bottom
      ></v-progress-linear>
    </v-app-bar>
  </div>
</template>
