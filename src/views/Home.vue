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
          <router-link :to="{ name: 'AboutUs' }">More About Us</router-link>
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

    <section class="latest-projects">
      <div class="container">
        <h2 class="section-title light-2">Latest Projects</h2>
        <Flicking
          :options="flickingOptions"
          class="projects-container"
          ref="latestProjectsFlicking"
        >
          <!-- Don't need to bind :key -->
          <div
            class="panel project-item"
            v-for="(proj, index) in latestProject"
            :key="index"
          >
            <img :src="proj.img" :alt="proj.title" />
            <div class="project-item-overlay">
              <a :href="proj.link" class="subsection-title light">{{
                proj.title
              }}</a>
              <div class="project-item-description">
                <p class="subsection-description light">
                  {{ proj.projectType }}
                </p>
                <span class="subsection-description light">{{
                  proj.date
                }}</span>
              </div>
            </div>
          </div>
        </Flicking>
      </div>
    </section>

    <section class="our-team">
      <div class="container">
        <h2 class="section-title light-2">Our Team</h2>
        <div class="our-team-container">
          <router-link
            :to="{ name: 'AboutUs' }"
            class="team-member"
            v-for="member in ourTeam"
          >
            <img :src="member.img" :alt="member.name" />
            <div class="team-member-overlay">
              <h3>{{ member.name }}</h3>
              <p v-for="skill in member.skills">{{ skill }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="clients-feedback">
      <div class="clients-feedback-overlay">
        <div class="container">
          <h2 class="section-title light">Client's Feedback</h2>
          <Flicking :options="flickingOptions" class="comments-container">
            <div
              class="panel comment-item"
              v-for="feedback in clientsFeedback"
              :key="feedback"
            >
              <div class="comment-header">
                <img :src="feedback.userProfile" alt="user" />
                <div class="comment-title">
                  <div class="comment-author">
                    <h4>{{ feedback.name }}</h4>
                    <span class="dot"></span>
                    <p class="subsection-description">
                      {{ feedback.date }} days ago
                    </p>
                  </div>
                  <div class="comment-stars">
                    <img
                      v-for="star in feedback.ratingStar"
                      src="/images/HomeView/ClientsFeedback/Star.png"
                      alt="star"
                    />
                  </div>
                </div>
              </div>
              <p class="comment-text subsection-description">
                {{ feedback.text }}
              </p>
              <div :class="`badge badge-${feedback.badgeClass}`">
                <span>{{ feedback.badgeText || feedback.badgeClass }}</span>
              </div>
              <div class="rating">
                <span>{{ feedback.rating.toFixed(1) }}</span>
              </div>
            </div>
          </Flicking>
        </div>
      </div>
    </section>

    <section class="faqs">
      <div class="container">
        <h2 class="section-title light-2">FAQs</h2>
        <div class="faqs-container">
          <router-link
            :to="{ name: 'Home', query: { category: faq.title } }"
            class="faq-item"
            v-for="faq in faqs"
            :key="faq"
          >
            <img :src="faq.img" :alt="faq.title" />
            <p>{{ faq.title }}</p>
          </router-link>
        </div>

        <div class="chat-and-faq-date">
          <div class="faq-chat">
            <div>
              <h3>Still have questions?</h3>
              <p>
                Can’t find the answer you’re looking for? Please chat to our
                team.
              </p>
            </div>
            <router-link to="/"> Let's Chat </router-link>
          </div>

          <div class="last-faq-date">
            <div class="last-question">
              <h4>Last Question</h4>
              <p>11.05.23 10:25</p>
            </div>
            <div class="last-answer">
              <h4>Last Answer</h4>
              <p>12.05.23 10:25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import services from "../externals/HomeView/services";
import latestProject from "../externals/HomeView/latestProjects.js";
import ourTeam from "../externals/HomeView/ourTeam.js";
import clientsFeedback from "../externals/HomeView/clientFeedbacks.js";
import faqs from "../externals/HomeView/FAQs.js";

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

// latest projects
const flickingOptions = ref({
  align: "prev",
  circularFallback: "bound",
  circular: true,
});
const latestProjectsFlicking = ref(null);

function onClickNextOnLatestProjectsFlicking() {
  latestProjectsFlicking.value.next();
}

function onClickPrevOnLatestProjectsFlicking() {
  latestProjectsFlicking.value.prev();
}
</script>
