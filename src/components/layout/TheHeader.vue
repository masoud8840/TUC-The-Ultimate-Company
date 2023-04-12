<template>
  <header
    :class="{ 'stick-on-top': stickOnTop }"
    :style="assignBackgroundToNavbarInOtherRoutes"
  >
    <nav class="navigation container">
      <router-link to="/" class="brand">The Ultimate Company</router-link>
      <button
        class="navbar-toggler"
        v-if="isOnMobileDevice"
        @click="toggleNavbar"
      >
        <img src="/images/NavigationMenu/Menu.svg" alt="menu" />
      </button>

      <ul class="navbar" v-if="!isOnMobileDevice || isNavbarOpen">
        <li class="navbar-item" v-for="item in menuItems">
          <router-link :to="{ name: 'FAQs' }">
            <ArrowRight class="navbar-link-arrow-right" />
            {{ item.title }}
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{ name: 'Home' }">
            <ArrowRight class="navbar-link-arrow-right" />
            <UserAccount />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { inject, ref, computed } from "vue";
import ArrowRight from "../icon/ArrowRight.vue";
import UserAccount from "../icon/UserAccount.vue";
import { useRoute } from "vue-router";
const menuItems = ref([
  {
    title: "About Us",
    // link: { name: "Abouts" },
  },
  {
    title: "Contact Us",
    // link: { name: "Contacts" },
  },
  {
    title: "FAQs",
    // link: { name: "FAQ" },
  },
  {
    title: "Careers",
    // link: { name: "Careers" },
  },
]);

const isOnMobileDevice = inject("isOnMobileDevice");
const isNavbarOpen = ref(false);
function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value;
}

const props = defineProps(["stickOnTop"]);
const route = useRoute();
const assignBackgroundToNavbarInOtherRoutes = computed(() => {
  if (route.name !== "Home")
    return {
      background: `transparent url("/images/NavigationMenu/HeaderBackground.svg")
      center/cover no-repeat`,
    };
});
</script>
