<script lang="ts">
import { defineComponent, useNuxt2Meta, ref } from '#app'

export default defineComponent({
  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  setup(props) {
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')

    useNuxt2Meta(() => {
      const title =
        props.error.statusCode === 404 ? pageNotFound.value : otherError.value

      return {
        title,
      }
    })

    return {
      pageNotFound,
      otherError,
    }
  }
})
</script>

<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
