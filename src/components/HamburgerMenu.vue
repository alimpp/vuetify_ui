<template>
  <div class="sidebar-container">
    <i class="bi bi-search text-h5 px-3"></i>
    <i class="bi bi-list text-h5" @click="openSideBar"></i>
    <div class="nav-sidebar" v-if="isOpen">
      <div class="sidebar">
        <i class="bi bi-x text-h5 px-1" @click="openSideBar"></i>

        <v-row class="d-flex flex-column mt-5 pt-5" align="center" no-gutters>
          <div class="d-flex flex-column">
            <span class="application_pointer pt-5" @click="goToHome">Home</span>
            <span class="application_pointer" @click="goToAbout">About</span>
          </div>
          <div class="d-flex mt-5">
            <i class="bi bi-instagram px-1"></i>
            <i class="bi bi-linkedin px-1"></i>
            <i class="bi bi-telegram px-1"></i>
            <i class="bi bi-facebook px-1"></i>
            <i class="bi bi-twitter px-1"></i>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const isOpen = ref(false);
const goToHome = () => {
  router.push("/home");
  openSideBar();
};
const goToAbout = () => {
  router.push("/about");
  openSideBar();
};
const openSideBar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  i {
    cursor: pointer;
  }
  .nav-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    background: rgba(6, 6, 6, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(6px);
    transition: 1s;
  }
  .sidebar {
    width: 280px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    animation: 0.2s opanSidebar;
    background: #fff;
    overflow-y: scroll;
    overflow-x: none;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
@keyframes opanSidebar {
  0% {
    width: 0;
  }
  100% {
    width: 280px;
  }
}
</style>
