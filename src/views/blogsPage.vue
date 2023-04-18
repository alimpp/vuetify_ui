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
    <v-container v-if="!circularLoading" class="application_animation">
      <h1>Blogs</h1>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const linearLoading = ref(false);
const circularLoading = ref(false);

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

<style scoped lang="scss"></style>
