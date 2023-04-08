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
        <img src="/images/HomeView/TeamWork.png" alt="teamwork" class="intoruction-img" />
        <span class="scroll-notation">Scroll Down</span>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
const projectScale = ref("default");
const projectType = ref("web");
</script>
