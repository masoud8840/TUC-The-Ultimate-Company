<template>
  <section class="dashboard-view-inner dashboard-track-progress-view">
    <section class="track-progress-header">
      <img
        src="/public/images/DashboardView/Microsoft Logo.svg"
        alt="Company logo"
      />
      <div>
        <h3>Microsoft</h3>
        <span>Ada Wong</span>
      </div>
    </section>
    <article class="card">
      <div
        class="progress-item"
        v-for="prog in projectSubProjectsProgress"
        :key="prog"
      >
        <circle-progress
          :percent="prog.percent"
          :transition="1000"
        ></circle-progress>
      </div>
    </article>

    <article class="card track_progress-deadlines">
      <section class="deadline-item deadline-frontend" v-for="i in 4">
        <div>
          <h5>Front End</h5>
          <span>Nov 07, 2022</span>
        </div>
        <progress max="100" value="10"></progress>
      </section>

      <h1>Deadlines</h1>
    </article>
    <div class="track_progress-version_control">
      <h3 class="group-title">Design</h3>
      <ul>
        <li><VersionHistory /></li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import VersionHistory from "../../UI/Dashboard/VersionHistory.vue";

const projectSubProjectsProgress = ref([
  {
    title: "Front End",
    percent: 25,
  },
  {
    title: "Back End",
    percent: 42,
  },
  {
    title: "UI/UX",
    percent: 27,
  },
  {
    title: "Copyright",
    percent: 55,
  },
]);
</script>
