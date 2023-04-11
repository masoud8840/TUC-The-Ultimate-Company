<template>
  <section class="abouts-view">
    <div class="abouts-header container">
      <h1>About Us</h1>
      <h2>We’re a distributed team</h2>
      <p>We have offices and teams around the world.</p>
    </div>

    <div class="world-map container">
      <img src="/images/AboutUsView/WorldMap.svg" alt="world-map" />
    </div>

    <div class="abouts-team container">
      <div class="abouts-team-members">
        <button
          class="abouts-team-member"
          :class="{ active: currentActiveMember === index }"
          @click="seCurrentActiveMember(index)"
          v-for="(member, index) in teamMembers"
        >
          <img :src="member.img" :alt="member.name" />
          <div class="abouts-team-member-description">
            <p>{{ member.name }}</p>
            <span>{{ member.role }}</span>
          </div>
        </button>
      </div>

      <div
        :class="`members-profession member-${member.name}l`"
        v-for="(member, index) in teamMembers"
      >
        <div
          class="profession-item member-bio"
          v-if="currentActiveMember === index"
        >
          <h3 class="profession-item-title">About me</h3>
          <div class="profession-item-description">
            <p>
              {{ member.aboutMe }}
            </p>
            <a :href="member.readMoreURL" target="_blank">Read More</a>
            <div class="member-infography">
              <div
                class="infography-item"
                v-for="key in Object.entries(member.infography)"
              >
                <h4 class="infography-title">{{ key[0] }}</h4>
                <div class="infography-subtitle">
                  <template v-if="key[0] === 'Location'">
                    <img :src="`${key[1].country}`" alt="iran-flag" />
                    <p>
                      {{ key[1].text }}
                    </p>
                  </template>
                  <template v-else>
                    <a :href="key[1].link" target="_blank">
                      {{ key[1].text }}
                    </a>
                    <img
                      src="/images/AboutUsView/OpenInNewTab.svg"
                      alt="open-in-new-tab"
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="profession-item member-projects"
          v-if="currentActiveMember === index"
        >
          <h3 class="profession-item-title">Projects</h3>
          <div class="profession-item-description">
            <div class="member-project-item" v-for="proj in member.projects">
              <img :src="proj.companyLogo" alt="company-logo" />
              <div class="project-titles">
                <h5>{{ proj.role }}</h5>
                <span>{{ proj.company }}</span>
              </div>
              <div class="project-dates">
                <p>
                  {{ formatProjectDate(new Date(proj.fromDate)) }} -
                  {{ formatProjectDate(new Date(proj.toDate)) }}
                </p>
                <a :href="proj.projectLink">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import teamMembers from "../externals/AboutUsView/teamMembers";
import { ref } from "vue";
const currentActiveMember = ref(0);

function seCurrentActiveMember(index) {
  currentActiveMember.value = index;
}

function formatProjectDate(date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
</script>

<style lang="scss"></style>
