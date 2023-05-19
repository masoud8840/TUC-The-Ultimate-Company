<template>
  <section class="dashboard-view-inner dashboard-projects-container">
    <div class="input-group-container">
      <div class="input-group">
        <input type="text" id="projects-search-input" placeholder="Search" />
        <img src="/images/DashboardView/Projects/Search.svg" alt="search" />
      </div>
      <div class="projects-list-style">
        <button
          class="dashboard-projects-listview-btn"
          v-for="view in ['ListView', 'GridView']"
          :key="view"
          :class="{ active: projectsOutputStyle === view }"
          @click="setDashboardProjectsView(view)"
        >
          <img
            :src="`/images/DashboardView/Projects/${view}.svg`"
            :alt="`${view}-icon`"
          />
        </button>
      </div>
    </div>
    <section
      :class="`dashboard-projects-container dashboard-projects-view ${projectsOutputStyle}`"
    >
      <article
        class="dashboard-project-item"
        v-for="proj in props.projects"
        :key="proj"
      >
        <router-link to="/" class="dashboard-project-item-title">
          <img :src="proj.logo" alt="company-logo" />
          <h4>{{ proj.name }}</h4>
          <p>{{ proj.founder }}</p>
        </router-link>
        <p class="dashboard-project-item-description">
          {{ proj.description }}
        </p>
        <div class="dashboard-project-item-footer">
          <div class="dashboard-project-item-startdate">
            <p>Start</p>
            <span>{{ formatProjectStartAndCompeletedTime(proj.startAt) }}</span>
          </div>
          <div class="dashboard-project-item-finishdate">
            <p>Compelete</p>
            <span>{{
              formatProjectStartAndCompeletedTime(proj.finishedOn)
            }}</span>
          </div>
        </div>
      </article>

      <button class="add-new-project-btn">
        <img src="/images/DashboardView/Projects/Puls.svg" alt="plus" />
        <p>Add New Project</p>
      </button>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["projects"]);
const projectsOutputStyle = ref("ListView");
function setDashboardProjectsView(style) {
  projectsOutputStyle.value = style;
}

function formatProjectStartAndCompeletedTime(date) {
  return new Date(date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
</script>
