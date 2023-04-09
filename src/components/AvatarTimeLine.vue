<template>
  <v-timeline>
    <v-timeline-item size="large" v-for="data in dataSource" :key="data.id">
      <template v-slot:icon>
        <v-avatar :image="data.image"></v-avatar>
      </template>
      <template v-slot:opposite>
        <span>{{ data.email }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text
          >Lorem ipsum dolor sit amet, no nam oblique veritus</v-card-text
        >
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
import {computed} from 'vue'
import {SliderDataStore} from '@/store/SliderDataStore'

const SliderDataStoreModule = SliderDataStore()

const dataSource = computed(() => {
    return SliderDataStoreModule.slider
})
</script>