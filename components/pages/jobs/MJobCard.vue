<script lang="ts">
import { defineComponent } from '#app'
import { mdiMapMarker, mdiCircleMedium } from '@mdi/js'

export default defineComponent({
  name: 'FJobCard',

  props: {
    title: String,
    positionFunctionName: String,
    dueDate: String,
  },

  setup() {
    return {
      mdiCircleMedium,
    }
  },
})
</script>

<template>
  <v-card class="m-job-card rounded-xl overflow-hidden" elevation="3">
    <v-card-title class="m-job-card__title pb-2" v-text="title" />

    <v-card-text>
      <v-layout justify-space-between class="text-caption mb-6">
        <v-layout align-center>
          <v-icon
            class="m-job-card__location-icon mr-1"
            size="16"
            color="primary"
            >{{ mdiCircleMedium }}</v-icon
          >

          <!-- <p
            class="m-job-card__location-title font-weight-bold mb-0"
            v-text="location"
          />
        </v-layout> -->

          <v-card-subtitle
            class="m-job-card__subtitle pb-2 primary--text font-weight-bold"
            v-text="positionFunctionName"
          />

          <p
            class="m-job-card__location-title font-weight-bold mb-0"
            v-text="dueDate"
          />
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.m-job-card {
  border: 2px solid var(--v-off-white-base) !important;

  &__subtitle {
    font-size: 12px;
  }

  &__link-text {
    color: #3c4146;
  }
  &:hover {
    .m-job-card__link-text {
      color: var(--v-primary-base);
    }
  }
}
</style>
