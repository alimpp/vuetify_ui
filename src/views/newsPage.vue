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
      <v-row no-gutters class="news_card_animation">
        <v-col cols="12" md="6" lg="4" xl="6" class="d-flex flex-column align-center justify-center">
          <v-sheet>
            <img
              src="https://schools.firstnews.co.uk/wp-content/uploads/sites/3/2019/10/Whats-on-Front-Page-of-Newspaper-Featured-1200x720.png"
              alt=""
            />
          </v-sheet>
        </v-col>
        <v-col class="mt-5" cols="12" md="6" lg="8" xl="6">
          <v-sheet class="px-5">
            <span>Frist News Blogs Page</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure
              excepturi architecto fugiat autem recusandae ipsum. Corporis aut ea
              voluptatum ullam, iusto eveniet illo rem vero dicta, quaerat minima harum
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              reiciendis explicabo tempora delectus, maiores illum, nisi unde fugiat sequi
              optio at deserunt nemo placeat beatae, laborum possimus omnis architecto
              eveniet
            </p>
            <div>
              <v-btn
                color="red"
                rounded="xl"
                class="mt-4 application_animation"
                :loading="loading"
                @click="loading = !loading"
              >
                get started
                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
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
    </v-container>
    <HotNewsBanner class="mt-5 application_animation" v-if="!circularLoading" />
    <v-container>
      <YearsTimeLine class="mt-5 application_animation" v-if="!circularLoading" />
    </v-container>
    <HotNewsBanner class="application_animation" v-if="!circularLoading" />
    <v-container>
      <Slider class="mt-5 application_animation" v-if="!circularLoading" />
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref, computed , watch } from "vue";
import { NewsDataStore } from "@/store/NewsDataStore";
import NewsCard from "@/components/NewsCard";
import YearsTimeLine from "@/components/YearsTimeLine";
import Slider from "@/components/Slider";
import HotNewsBanner from "@/components/HotNewsBanner";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

watch(loading, (newValue, oldValue) => {
  setTimeout(() => {
    router.push("/blogs");
  }, 2000);
});

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

<style scoped>
img {
  width: 350px;
  height: 250px;
  border-radius: 50%;
}
span {
  font-size: 22px;
  color: red;
}
p {
  font-size: 12px;
}
</style>
