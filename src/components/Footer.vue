<script>
export default {
  data: () => ({
    links: [
      { icon: 'mdi-github', address: 'https://github.com/jardimfelipe' },
      {
        icon: 'mdi-linkedin',
        address: 'https://www.linkedin.com/in/felipe-evangelista-0ab028135/',
      },
    ],
  }),
};
</script>

<template>
  <v-footer id="footer" dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="flex justify-center">
        <a
          :href="link.address"
          target="_blank"
          v-for="(link, index) in links"
          :key="`${link}-${index}`"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </a>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Felipe Jardim Evangelista</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
