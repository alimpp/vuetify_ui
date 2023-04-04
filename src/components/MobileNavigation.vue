<template>
  <div
    class="mobile-nav"
  >
    <div class="logo-container">
      <h2>NEWS LABEL</h2>
      <span>Online News Website</span>
    </div>
    <div class="items-container">
      <HamburgerMenu />
    </div>
  </div>
</template>

<script setup>
import HamburgerMenu from "@/components/HamburgerMenu";
</script>

<style lang="scss" scoped>
.mobile-nav {
  display: flex;
  h2 {
    color: red;
  }
  span {
    cursor: pointer;
  }
  .logo-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 15px;
  }
  .items-container {
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 10px;
  }
}
</style>
