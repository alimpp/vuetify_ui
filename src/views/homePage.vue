<template>
  <div class="home-page-container">
    <HotNewsBanner />
    <div class="header-container">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <h2 class="application_animation">News Label Ready Now...</h2>
            <span class="application_animation"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eligendi
              vel dolorum temporibus fuga sapiente soluta tempora corporis veritatis
              magnam commodi molestias, aperiam dolor enim alias, consectetur
              perferendis...</span
            >
            <div>
              <v-btn class="mt-4 application_animation" rounded="xl">get started</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <HotNewsBanner />
    <v-container>
      <HomeSlider />
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HomeSlider from "@/components/HomeSlider";
import HotNewsBanner from "@/components/HotNewsBanner";
const dialog = ref(false);
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://www.discoverlosangeles.com/sites/default/files/business/oue-skyspace-la/h_2000-crm-la-skyline_1ab70a6c-caca-4c46-b24032961cfe1c77_34e58f98-7a92-4ced-98f78983b1f0f9fa.jpg");
  h2 {
    color: #fff;
  }
  span {
    color: #fff;
  }
}
</style>
