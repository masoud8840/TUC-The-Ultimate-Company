<template>
  <section class="dashboard-view-inner  dashboard-track-progress-view">
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
  </section>
</template>
<script setup>
import { ref } from "vue";
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
