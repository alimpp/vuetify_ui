<template>
  <div class="home-page-container">
    <HotNewsBanner />
    <div class="header-container application_animation">
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
              <v-btn
                class="mt-4 application_animation"
                rounded="xl"
                :loading="loading"
                @click="loading = !loading"
              >
                get started
                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <HotNewsBanner />
    <v-container class="mt-5">
      <Slider class="application_animation" />
    </v-container>
    <v-container class="mt-5 application_animation">
      <v-row no-gutters>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-sheet>
            <img
              src="https://schools.firstnews.co.uk/wp-content/uploads/sites/3/2019/10/Whats-on-Front-Page-of-Newspaper-Featured-1200x720.png"
              alt=""
            />
          </v-sheet>
        </v-col>
        <v-col class="mt-5" cols="12" md="6" lg="6" xl="6">
          <v-sheet class="px-5">
            <span>Frist News</span>
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
    </v-container>
    <HotNewsBanner class="mt-5" />
    <HomeCarousel class="application_animation" />
    <HotNewsBanner />
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-sheet>
            <AvatarTimeLine />
          </v-sheet>
        </v-col>
        <v-col class="mt-5" cols="12" md="6" lg="6" xl="6">
          <v-sheet class="px-5 mt-5">
            <img
              src="https://schools.firstnews.co.uk/wp-content/uploads/sites/3/2019/10/Whats-on-Front-Page-of-Newspaper-Featured-1200x720.png"
              alt=""
            />
            <span>Frist News</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure
              excepturi architecto fugiat autem recusandae ipsum. Corporis aut ea
              voluptatum ullam, iusto eveniet illo rem vero dicta, quaerat minima harum
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
              reiciendis explicabo tempora delectus, maiores illum, nisi unde fugiat sequi
              optio at deserunt nemo placeat beatae, laborum possimus omnis architecto
              eveniet
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, laudantium?
              Voluptates, esse consequuntur, suscipit laboriosam ut repellendus excepturi
              amet modi omnis aut, inventore adipisci ipsa doloribus a quidem.
              Necessitatibus, cumque...
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit
              voluptatibus autem nam, perferendis error possimus libero a omnis minus
              atque consequatur eaque vero ut similique architecto molestiae? Nostrum,
              obcaecati.
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
    </v-container>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Slider from "@/components/Slider";
import HomeCarousel from "@/components/HomeCarousel";
import HotNewsBanner from "@/components/HotNewsBanner";
import AvatarTimeLine from "@/components/AvatarTimeLine";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

watch(loading, (newValue, oldValue) => {
  setTimeout(() => {
    router.push("/news");
  }, 2000);
});
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
img {
  width: 100%;
  height: 250px;
  border-radius: 15px;
}
span {
  font-size: 22px;
  color: red;
}
p {
  font-size: 12px;
}
</style>
