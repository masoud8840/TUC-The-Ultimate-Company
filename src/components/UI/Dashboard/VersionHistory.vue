<template>
  <section class="version_control-container">
    <img
      :src="`/images/DashboardView/TrackProgress/${commit.type}Task.svg`"
      alt="commit type"
    />
    <section class="version_control-inner">
      <img src="/images/DashboardView/JulieFromTUC.svg" alt="commit creator" class="commit-creator-img" />
      <p v-html="showCommitStatus"></p>
      <span class="version_control-date">{{
        formatDate(props.commit.date)
      }}</span>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["commit"]);

function formatDate(date) {
  const commitDate = new Date(date);
  return commitDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

const showCommitStatus = computed(() => {
  if (props.commit.type === "Create") {
    return `${props.commit.creator}<span> Created a task </span>${props.commit.description}`;
  } else {
    return `${props.commit.creator}<span> Done a task </span>${props.commit.description}`;
  }
});
</script>
