<template>
  <div class="desktop-nav">
    <div class="logo-container">
      <h2>NEWS LABEL</h2>
      <span>Online News Website</span>
    </div>
    <div class="items-container">
      <div class="d-flex mx-5 px-5">
        <span class="application_pointer pt-1" @click="goToHome">Home</span>
        <span class="application_pointer pt-1 px-4" @click="goToHome">News</span>
        <span class="application_pointer pt-1" @click="goToHome">Blogs</span>
        <span class="application_pointer pt-1 px-4" @click="goToAbout">About</span>
        <i class="bi bi-search text-h5 px-3"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToHome = () => {
  return router.push("/home");
};

const goToAbout = () => {
  return router.push("/about");
};

</script>

<style lang="scss" scoped>
.desktop-nav {
  width: 100%;
  display: flex;
  direction: ltr;
  h2{
    color: red;
  }
  span{
    cursor: pointer;
  }
  .logo-container {
    width: 300px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .items-container {
    width: 95%;
    height: 90px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
