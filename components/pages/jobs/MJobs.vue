<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from '#app'
import MJobCard from './MJobCard.vue'
import { mdiChevronLeft, mdiChevronRight, mdiFilter } from '@mdi/js'
import { Job } from '~~/pages/jobs/typings'

export default defineComponent({
  name: 'MJobs',

  components: {
    MJobCard,
  },

  props: {
    offers: Array as () => Job[],
  },

  setup({ offers }) {
    // dataIteratorOption
    const dataIteratorOptions = reactive({
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      offersPerPage: 10,
    })

    const numberOfPages = computed(() =>
      Math.ceil(offers.length / dataIteratorOptions.offersPerPage)
    )

    const nextPage = () => {
      if (dataIteratorOptions.page + 1 <= numberOfPages.value)
        dataIteratorOptions.page += 1
    }
    const formerPage = () => {
      if (dataIteratorOptions.page - 1 >= 1) dataIteratorOptions.page -= 1
    }

    return {
      ...toRefs(dataIteratorOptions),
      numberOfPages,

      nextPage,
      formerPage,

      mdiFilter,
      mdiChevronLeft,
      mdiChevronRight,
    }
  },
})
</script>

<template>
  <v-container class="max-width-800">
    <p class="font-weight-bold">Filter Jobs by</p>

    <v-data-iterator
      :items="offers"
      :items-per-page.sync="offersPerPage"
      :page.sync="page"
      :search="search"
      hide-default-footer
    >
      <template #default="props">
        <v-row>
          <v-col v-for="(offer, i) in props.items" :key="i" cols="12">
            <m-job-card
              :title="offer.job.title"
              :positionFunctionName="offer.job.position_function_name_en"
              :dueDate="offer.job.due_date"
            />
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-container fluid>
          <v-row class="mt-6" align="center">
            <v-btn dark color="primary" class="mr-1" @click="formerPage">
              <v-icon>{{ mdiChevronLeft }}</v-icon>
            </v-btn>

            <v-btn dark color="primary" class="ml-1" @click="nextPage">
              <v-icon>{{ mdiChevronRight }}</v-icon>
            </v-btn>

            <span class="ml-4 grey--text">
              Page {{ page }} of {{ numberOfPages }}
            </span>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </v-container>
</template>
