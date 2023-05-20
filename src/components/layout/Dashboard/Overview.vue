<template>
  <section class="dashboard-view-inner dashboard-overview-container">
    <div class="dashboard-section-title">
      <h2 class="dashboard-title">Good Morning, !</h2>
      <p class="dashbaord-subtitle">Monday, 20 October 2021</p>
    </div>
    <article class="dashboard-overview">
      <div class="auth-level">
        <h4 class="auth-level-txt">B</h4>
        <div class="auth-progress">
          <progress min="0" max="100" value="30"></progress>
          <div class="progress-subtitle">
            <span>Activate 2FA</span>
            <span>95%</span>
          </div>
        </div>
        <div class="dashboard-item-title">
          <h3>Authentication Level</h3>
          <p>29 Nov, 2022</p>
        </div>
      </div>

      <div class="project-progress">
        <h4>{{ projectProgress[0].title }}</h4>
        <ul class="project-progress-list">
          <li v-for="item in isntDoneProjectProgress" :key="item">
            <span>
              {{ item.title }}
            </span>
          </li>
        </ul>
        <div class="dashboard-item-title">
          <h3>Project Progress</h3>
          <p>85%</p>
        </div>
      </div>

      <div class="time-remaining">
        <h4>Remaining Time</h4>
        <span>43 hours</span>
      </div>
      <div class="time-passed">
        <h4>Time Passed</h4>
        <span>12 hours</span>
      </div>

      <div class="cost">
        <h4>Cost</h4>
        <span>$12</span>
      </div>

      <div class="today-tasks">
        <h4>
          <img src="/images/DashboardView/Check.svg" alt="check" />
          <span>Add dashboard-overview page</span>
        </h4>
        <ul class="project-progress-list">
          <li v-for="item in isntDoneProjectProgress" :key="item">
            <span>
              {{ item.title }}
            </span>
          </li>
        </ul>
        <div class="dashboard-item-title">
          <h3>Today's Tasks</h3>
          <p>3 hours ago</p>
        </div>
      </div>

      <div class="recent-messages-mobile">
        <div class="recent-messages-container">
          <div class="recent-messages-inner">
            <router-link
              to="/dashboard/Overview"
              class="recent-message-item"
              v-for="i in 2"
            >
              <img src="/images/DashboardView/JulieFromTUC.svg" alt="sender" />
              <div class="recent-message-item-description">
                <div class="recent-message-item-tite">
                  <h4>Julie Cochran</h4>
                  <span>Now</span>
                </div>
                <div class="recent-message-item-subtitle">
                  <p>The home route added to your project</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="dashboard-item-title">
          <h3>Recent Messages</h3>
          <p>Last Update: 3 mins ago</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const projectProgress = ref([
  {
    title: "Added home route",
    isDone: true,
  },
  {
    title: "Add contact us route",
    isDone: false,
  },
  {
    title: "Add about us route",
    isDone: false,
  },
  {
    title: "minifying tailwind classes",
    isDone: false,
  },
  {
    title: "Add sign in/up route",
    isDone: false,
  },
]);

const isntDoneProjectProgress = computed(() => {
  let res = projectProgress.value.filter((p) => !p.isDone);
  return res.slice(0, 2);
});
</script>
