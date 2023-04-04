<template>
  <v-sheet class="mx-auto">
    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
      <v-slide-group-item
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          v-for="data in dataSource"
          :key="data.id"
          elevation="2"
          :class="['ma-4']"
          width="300"
          @click="toggle"
        >
        <div class="d-flex">
            <img :src="data.image" alt="image profile">
            <div class="d-flex flex-column px-2">
                <span class="pt-2">{{ data.email }}</span>
                <p>@{{ data.username }}</p>
            </div>
        </div>
        <p class="px-2 pt-2 pb-2">{{ data.text }}</p>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { ref , computed } from "vue";
import {SliderDataStore} from '@/store/SliderDataStore'

const model = ref(null);
const sliderDataStoreModule = SliderDataStore()

const dataSource = computed(() => {
    return sliderDataStoreModule.slider
})
</script>

<style scoped lang="scss">
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px 5px;
}
span{
    font-size: 12px;
}
p{
    font-size: 12px;
    color: #7f7f7f;
}
</style>
