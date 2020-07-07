<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div :class="{ active: active }" class="tooltip">
    <div class="tooltip__info">
      <h4>{{ movie.Title }}</h4>
      <h5>{{ movie.Year }}</h5>
      <v-btn text @click="$emit('clicked', movie.imdbID)" color="secondary">+ info</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: rgba($color: #eeeeee, $alpha: 0.5);
  padding: 5px 10px;
  display: none;
  position: absolute;
  &__info {
    text-align: center;
  }
}
.active {
  display: block;
}
</style>
