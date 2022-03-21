<script lang="ts">
import { defineComponent } from '#app'

export default defineComponent({
  name: 'HomePage',

  head: {
    title: 'Home',
  },
})
</script>

<template>
  <v-container>
    <h1>Welcome to the Homepage</h1>

    <p>
      to navigate to the job page
      <nuxt-link to="/jobs">click here</nuxt-link>
    </p>
  </v-container>
</template>
