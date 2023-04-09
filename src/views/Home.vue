<template>
  <section class="home-view">
    <section class="hero">
      <div class="container">
        <div class="company-introduction">
          <h2 class="section-title light">TUC</h2>
          <p>
            The most professional society of senior developers are here to helps
            you to <span>Build</span> your project in bigger <span>Scale</span>
          </p>
          <!-- TODO: check link to abouts page -->
          <router-link :to="{ name: 'Home' }">More About Us</router-link>
          <div class="init-project-dropdown">
            <select name="company-scale" v-model="projectScale">
              <option value="default">Select an Option</option>
              <option value="startup">Startup</option>
              <option value="small-company">Small Company</option>
              <option value="large-company">Large Company</option>
            </select>
            <span class="vl"></span>
            <select
              name="company-project"
              v-model="projectType"
              :disabled="projectScale === 'default'"
            >
              <option value="web">Web Application</option>
              <option value="mobile">Mobile Application</option>
              <option value="desktop">Desktop Application</option>
              <option value="other">Others</option>
            </select>
            <router-link to="/">Let's Talk</router-link>
          </div>
        </div>
        <img
          src="/images/HomeView/TeamWork.png"
          alt="teamwork"
          class="intoruction-img"
        />
        <span class="scroll-notation">Scroll Down</span>
      </div>
    </section>

    <section class="subhero container" ref="subheroRef">
      <div
        class="subhero-item"
        v-for="(item, index) in subheroItems"
        :key="item"
      >
        <h3>{{ item }}</h3>
        <p>{{ subheroTexts[index] }}</p>
      </div>
    </section>

    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title light-2">Services</h2>
        <div class="services-container">
          <!-- Don't need the key attribute-->
          <div class="service-item" v-for="service in services">
            <img :src="service.img" :alt="services.title" />
            <h3 class="subsection-title">{{ service.title }}</h3>
            <p class="subsection-description">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import services from "../externals/services.js";
// Hero
const projectScale = ref("default");
const projectType = ref("web");

// Subhero
const trustedByPeopleValue = ref(0);
const youtubeSubsValue = ref(0);
const happyClientsValue = ref(0);
const teamMembersValue = ref(0);
const jobsDoneSuccessfullyValue = ref(0);
const somethingInSubheroValue = ref(0);
const subheroItems = ref([
  trustedByPeopleValue,
  youtubeSubsValue,
  happyClientsValue,
  teamMembersValue,
  jobsDoneSuccessfullyValue,
  somethingInSubheroValue,
]);
const subheroTexts = ref([
  "Trusted by People",
  "Youtube Subscribers",
  "Happy Clients",
  "Team Members",
  "Jobs Done Successfuly",
  "Something in Subhero",
]);
const targetValues = [480, 185, 222, 5, 35, 92];
const subheroRef = ref(null);
onMounted(() => {
  let counted = false;

  const countingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 && !counted) {
        subheroItems.value.map((item, index) => {
          let interval = setInterval(() => {
            item.value++;
            if (item.value == targetValues[index]) {
              clearInterval(interval);
            }
          }, 5000 / targetValues[index]);
        });
        counted = true;
      }
    });
  });
  countingObserver.observe(subheroRef.value);
});
</script>
