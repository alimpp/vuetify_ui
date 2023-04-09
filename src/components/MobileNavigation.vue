<template>

    <div class="mobile-nav" :class="{ open_menu: open }">
      <div class="items-container">
        <div>
          <div class="logo-container">
            <h2>NEWS LABEL</h2>
            <span class="px-2">Online News Website</span>
          </div>
        </div>
        <router-link
          class="item"
          @click="openMenu"
          v-for="item in items"
          :key="item.id"
          :to="item.path"
          >{{ item.name }}</router-link
        >
      </div>

      <div class="hambuger-container">
        <i
          class="bi bi-x-lg mt-3 application_animation application_pointer"
          v-if="open"
          @click="openMenu"
        ></i>
        <i
          class="bi bi-filter-left mt-3 item application_pointer application_animation"
          v-else
          @click="openMenu"
        ></i>
      </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'

const open = ref(false)
const items = ref([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Contact Us", path: "contact" },
])

const openMenu = () => {
  open.value = !open.value 
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  width: 100%;
  height: 80px;
  display: flex;
  overflow: hidden;
  transition: 0.5s;
  margin-bottom: 10px;
  padding: 6px 18px;
  h2{
    color: red;
  }
  .items-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 500;
    }
    .item {
      text-decoration: none;
      color: black;
      font-size: 12px;
      font-weight: 400;
      padding: 15px 7px;
    }
  }
  .hambuger-container {
    width: 50%;
    display: flex;
    justify-content: end;
    i {
       font-size: 25px;
    }
  }
}
.open_menu {
  height: 270px;
}
</style>
