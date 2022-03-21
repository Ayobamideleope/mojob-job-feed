<script lang="ts">
import { defineComponent } from '#app'
import MJobs from '~/components/pages/jobs/MJobs.vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

import { Job, PositionFunction, PaginatedPositionFunctionList } from './typings'

export default defineComponent({
  name: 'JobsPage',

  head: {
    title: 'Open Jobs',
  },

  components: {
    MJobs,
  },

  async asyncData({ $axios }: { $axios: NuxtAxiosInstance }) {
    let jobListings: [] | Job[] = []
    let positionFunctions: [] | PositionFunction[] = []

    try {
      jobListings = await $axios.$get(
        'https://test-api.mojob.io/public/job/listings/?include_open=False&use_mojob_feed_filter=False&use_pagination=False'
      )

      const positionFunctionData: PaginatedPositionFunctionList =
        await $axios.$get(
          'https://test-api.mojob.io/public/job/position-functions/?page_size=20'
        )
      positionFunctions = positionFunctionData.results
    } catch (error) {
      console.error(error)
    }

    return { offers: jobListings }
  },
})
</script>

<template>
  <section class="off-white py-10">
    <m-jobs :offers="offers" />
  </section>
</template>
