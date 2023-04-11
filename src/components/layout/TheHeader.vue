<template>
  <header :class="{ 'stick-on-top': stickOnTop }">
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
          <router-link to="/">
            <ArrowRight class="navbar-link-arrow-right" />
            {{ item.title }}
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{ name: 'AboutUs' }">
            <ArrowRight class="navbar-link-arrow-right" />
            <UserAccount />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { inject, ref, onMounted } from "vue";
import ArrowRight from "../icon/ArrowRight.vue";
import UserAccount from "../icon/UserAccount.vue";
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

const stickOnTop = ref(null);
onMounted(() => {
  window.addEventListener("scroll", checkWindowScroll);
});
function checkWindowScroll() {
  stickOnTop.value = window.scrollY > 20;
}
</script>
