<template>
  <the-header :stickOnTop="stickOnTop"></the-header>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import { onMounted, provide, ref, watch } from "vue";
import { useRoute } from "vue-router";

const isOnMobileDevice = ref(null);
onMounted(() => {
  window.addEventListener("resize", checkWindowSize);
  checkWindowSize();
  window.addEventListener("scroll", checkWindowScroll);
});
function checkWindowSize() {
  isOnMobileDevice.value = window.innerWidth < 768;
}
provide("isOnMobileDevice", isOnMobileDevice);

const route = useRoute();
const stickOnTop = ref(false);
function checkWindowScroll() {
  stickOnTop.value = window.scrollY > 20 && route.name === "Home";
}
</script>
