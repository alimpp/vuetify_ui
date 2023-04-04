<template>
  <v-app>
    <v-main>
      <DesktopNavigation class="desktop-nav"/>
      <MobileNavigation class="mobile-nav" />
      <router-view />
      <ApplicationFooter/>
    </v-main>
  </v-app>
</template>

<script setup>
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileNavigation from '@/components/MobileNavigation'
import ApplicationFooter from '@/components/ApplicationFooter'
</script>

<style lang="scss" scoped>
.mobile-nav{
  display: none;
}
@media (max-width: 800px) {
  .desktop-nav{
    display: none;
  }
  .mobile-nav{
    display: flex;
  }
}
</style>
