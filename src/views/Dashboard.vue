<template>
  <section class="dashboard-view">
    <nav class="dashboard-navbar">
      <h1 class="brand">{{ isMobile ? "TUC" : "The Ultimate Company" }}</h1>
      <ul>
        <li
          v-for="(item, index) in navbarItems"
          :key="item"
          @click="checkForLogout(index)"
        >
          <router-link
            :to="`/dashboard/${item.link || item.title}`"
            :title="item.title"
          >
            <component :is="item.component"></component>
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <Overview v-if="props.tab === 'overview'" />
    <TrackProgress v-if="props.tab === 'track-progress'" />
    <Projects :projects="user.projects" v-if="props.tab === 'projects'" />
    <Settings v-if="props.tab === 'settings'" />
  </section>
</template>

<script setup>
import Overview from "../components/layout/Dashboard/Overview.vue";
import TrackProgress from "../components/layout/Dashboard/TrackProgress.vue";
import Projects from "../components/layout/Dashboard/Projects.vue";
import Settings from "../components/layout/Dashboard/Settings.vue";
import { inject, shallowRef } from "vue";
import OverviewIcon from "../components/icon/Dashboard/Overview.vue";
import TrackProgressIcon from "../components/icon/Dashboard/TrackProgress.vue";
import ProjectsIcon from "../components/icon/Dashboard/Projects.vue";
import AuthenticationIcon from "../components/icon/Dashboard/Authentication.vue";
import MessagesIcon from "../components/icon/Dashboard/Messages.vue";
import SettingsIcon from "../components/icon/Dashboard/Settings.vue";
import LogoutIcon from "../components/icon/Dashboard/Logout.vue";
import useSignout from "../composables/useLogout";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["tab"]);
const isMobile = inject("isOnMobileDevice");

const navbarItems = shallowRef([
  {
    title: "overview",
    component: OverviewIcon,
  },
  {
    title: "track progress",
    component: TrackProgressIcon,
    link: "track-progress",
  },
  {
    title: "projects",
    component: ProjectsIcon,
  },
  {
    title: "authentication",
    component: AuthenticationIcon,
  },
  {
    title: "messages",
    component: MessagesIcon,
  },
  {
    title: "settings",
    component: SettingsIcon,
  },
  {
    title: "logout",
    component: LogoutIcon,
  },
]);

const Logout = useSignout();
const checkForLogout = async (logoutBtnIndex) => {
  if (logoutBtnIndex === 6) {
    await Logout();
    await router.push({ name: "Home" });
  }
};
const user = {
  projects: [
    {
      name: "",
      founder: "",
      description: "",
      link: "",
      logo: "",
      startAt: "",
      finishedOn: "",
    },
  ],
};
</script>
