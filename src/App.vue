<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import { onMounted, provide, ref } from "vue";
const isOnMobileDevice = ref(null);

onMounted(() => {
  window.addEventListener("resize", checkWindowSize);
  checkWindowSize();
});

function checkWindowSize() {
  isOnMobileDevice.value = window.innerWidth < 768;
}
provide("isOnMobileDevice", isOnMobileDevice);
</script>
