<template>
  <v-footer class="text-center d-flex flex-column pt-5">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-5">
      <span>
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
        commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc.
        Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae
        velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel
        ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam
        elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </span>
    </div>

    <v-divider></v-divider>

    <div class="pt-5">{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";
const icons = ref(["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]);
</script>

<style>
span{
  font-size: 12px;
}
</style>
