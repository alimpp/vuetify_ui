<template>
  <div>
    <v-progress-linear
      v-if="linearLoading"
      color="error"
      indeterminate
    ></v-progress-linear>
    <v-sheet
      class="d-flex flex-column align-center justify-center mb-6"
      height="500"
      v-if="circularLoading"
    >
      <v-progress-circular color="error" indeterminate :size="58"></v-progress-circular>
    </v-sheet>
    <v-container v-if="!circularLoading">
      <v-row class="d-flex align-center justify-center">
        <v-vol cols="12" md="4" lg="6" xl="6" v-for="data in dataSource" :key="data.id">
          <v-sheet>
            <NewsCard
              :image="data.image"
              :title="data.title"
              :authorimage="data.authorimage"
              :authoremail="data.authoremail"
              :text="data.text"
              class="mx-5"
            />
          </v-sheet>
        </v-vol>
      </v-row>
      <YearsTimeLine class="mt-5" />
      <Slider class="mt-5" />
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { NewsDataStore } from "@/store/NewsDataStore";
import NewsCard from "@/components/NewsCard";
import YearsTimeLine from "@/components/YearsTimeLine";
import Slider from '@/components/Slider'

const linearLoading = ref(false);
const circularLoading = ref(false);
const newsDataStoreModule = NewsDataStore();

const dataSource = computed(() => {
  return newsDataStoreModule.news;
});

onMounted(() => {
  circularLoading.value = true;
  setTimeout(() => {
    circularLoading.value = false;
    linearLoading.value = true;
  }, 2000);
  setTimeout(() => {
    linearLoading.value = false;
  }, 4000);
});
</script>

<style scoped></style>
