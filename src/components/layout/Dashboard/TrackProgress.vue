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
    <article class="card track_progress-progress">
      <section class="track_progress-progresses">
        <div
          class="progress-item"
          v-for="progress in projectSubProjectsProgress"
        >
          <CircularProgress
            :key="progress"
            :percent="progress.percent"
            :title="progress.title"
            :status="progress.status"
          />
        </div>
      </section>
      <h1>Overall Progresses</h1>
    </article>

    <article class="card track_progress-deadlines">
      <section class="deadline-item" v-for="i in projectSubProjectsProgress">
        <div>
          <h5>{{ i.title }}</h5>
          <span>Nov 07, 2022</span>
        </div>
        <progress
          max="100"
          :value="i.deadlineValue"
          ref="categoriesProgress"
          :class="formatProgressStyle(i.percent)"
        ></progress>
      </section>

      <h1>Deadlines</h1>
    </article>
    <div class="track_progress-version_control">
      <div
        class="track_progress-version_control_inner"
        v-for="category in commitCategories"
        :key="category"
      >
        <h3 class="group-title">{{ category }}</h3>
        <ul>
          <li v-for="commit in commitsHistory" :key="commit">
            <VersionHistory :commit="commit" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import VersionHistory from "../../UI/Dashboard/VersionHistory.vue";
import CircularProgress from "../../UI/Dashboard/CircularProgress.vue";
const projectSubProjectsProgress = ref([
  {
    title: "Front End",
    percent: 12,
    deadlineValue: 0,
    status: "Tracking",
  },
  {
    title: "Back End",
    percent: 80,
    deadlineValue: 0,
    status: "Delayed",
  },
  {
    title: "UI/UX",
    percent: 27,
    deadlineValue: 0,
    status: "Tracking",
  },
  {
    title: "Copyright",
    percent: 55,
    deadlineValue: 0,
    status: "Completed",
  },
]);
function countProjectsDeadlines(index) {
  projectSubProjectsProgress.value.map((progress) => {
    const stepInterval = setInterval(() => {
      progress.deadlineValue++;

      if (progress.deadlineValue === progress.percent)
        clearInterval(stepInterval);
    }, 650 / progress.percent);
  });
}
countProjectsDeadlines();

const commitCategories = ref(["Front End", "Back End", "Design", "Copyright"]);
const commitsHistory = ref([
  {
    creator: "Masoud Gharedaghi",
    description: "Adding new page's UI",
    date: new Date(2023, 1, 15),
    type: "Create",
  },
  {
    creator: "Masoud Gharedaghi",
    description: "Adding new page's UI",
    date: new Date(2023, 1, 15),
    type: "Done",
  },
  {
    creator: "Masoud Gharedaghi",
    description: "Adding new page's UI",
    date: new Date(2023, 1, 15),
    type: "Done",
  },
]);
const categoriesProgress = ref([]);
function formatProgressStyle(percent) {
  if (percent < 25) {
    return "progress-red";
  }
  if (percent >= 25 && percent < 50) {
    return "progress-yellow";
  }
  if (percent >= 50 && percent < 75) {
    return "progress-purple";
  }
  if (percent >= 75) {
    return "progress-green";
  }
}
</script>
