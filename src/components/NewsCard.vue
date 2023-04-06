<template>
  <v-card class="mx-5 mt-5 news_card_animation" max-width="320">
    <v-img
      :src="image"
      height="200px"
      cover
    ></v-img>

    <h5 class="px-3 py-2">{{ title }} in News Label...</h5>

   <div class="d-flex">
    <img class="author-image" :src="authorimage" alt="image">
    <v-card-subtitle class="pt-2"> {{ authoremail }} </v-card-subtitle>
   </div>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
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
.author-image{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}
</style>
