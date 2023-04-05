<template>
  <v-carousel height="600" hide-delimiters progress="primary">
    <v-carousel-item v-for="data in dataSource" :key="data.id">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="carousel-items" :style="{ 'background-image': 'url(' + data.image + ')' }">
            <div class="glass">
                <span>{{ data.title }}</span>
                <p>{{ data.text }}</p>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from "vue";
import { CarouselDataStore } from "@/store/CarouselDataStore";

const carouselDataStoreModule = CarouselDataStore();

const dataSource = computed(() => {
  return carouselDataStoreModule.carousel;
});
</script>

<style scoped lang="scss">
.carousel-items {
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  .glass{
    width: 100%;
    height: 600px;
    background-color:rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 0 70px;
    span{
        font-size: 26px;
    }
    p{
        font-size: 12px;
    }
  }
}
</style>
