<template>
  <div class="blogs-cards"></div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);

const props = defineProps({
  authorimage: {
    type: String,
    default: "",
    required: false,
  },
  authoremail: {
    type: String,
    default: "",
    required: false,
  },
  image: {
    type: String,
    default: "",
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  text: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style>
.author-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}
</style>
