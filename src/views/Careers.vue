<template>
  <section class="careers-view container">
    <div class="careers-header">
      <h1>We’re Hiring</h1>
      <h2>We do things differently</h2>
      <p>Our shared values keep us connected and guide us as one team.</p>
    </div>

    <div class="careers-requirements">
      <div class="careers-requirement-item" v-for="req in requirements">
        <img :src="`/images/CareersView/${req.img}.svg`" :alt="req.img" />
        <h4>{{ req.title }}</h4>
        <p>{{ req.subtitle }}</p>
      </div>
    </div>

    <Flicking :options="{ align: 'prev' }" class="careers-categories">
      <button
        class="panel careers-category-item"
        :class="{ active: cat === currentActiveCategory }"
        @click="setCurrentActiveCategory(cat)"
        v-for="(cat, index) in careersCategories"
        :key="index"
      >
        {{ cat }}
      </button>
    </Flicking>
    <div class="careers-list">
      <div class="careers-filter" v-if="!isMobile">
        <div class="careers-filter-item">
          <h5>{{ SalaryFilterItems.title }}</h5>
          <ul>
            <li v-for="input in SalaryFilterItems.items">
              <input
                type="radio"
                :name="SalaryFilterItems.title"
                :id="`${SalaryFilterItems.title}-${input.value}`"
                :value="input.value"
                v-model="selectedSalary"
              />
              <label :for="`${SalaryFilterItems.title}-${input.value}`">{{
                input.text
              }}</label>
            </li>
          </ul>
        </div>

        <div class="careers-filter-item">
          <h5>{{ locationFilterItems.title }}</h5>
          <ul>
            <li v-for="input in locationFilterItems.items">
              <input
                type="checkbox"
                :name="locationFilterItems.title"
                :id="`${locationFilterItems.title}-${input.value}`"
                :value="input.value"
                v-model="selectedLocations"
              />
              <label :for="`${locationFilterItems.title}-${input.value}`">{{
                input.text
              }}</label>
            </li>
          </ul>
        </div>
      </div>

      <div class="careers-list-list">
        <div class="empty-careers-item" v-if="careersOutput.length === 0">
          <h3>No Careers Found with Categories Which You Specified.</h3>
        </div>
        <div
          class="careers-item"
          v-for="career in careersOutput"
          v-if="careersOutput.length !== 0"
        >
          <div class="careers-item-title">
            <div>
              <h4>{{ career.title }}</h4>
              <p>{{ career.subtitle }}</p>
            </div>
            <div class="careers-item-category">
              <span class="careers-item-category-badge">{{ career.tag }}</span>
            </div>
          </div>
          <div class="careers-item-category">
            <span class="careers-item-category-badge">{{ career.tag }}</span>
          </div>
          <ul class="careers-item-info">
            <li>
              <img src="/images/CareersView/Clock.svg" alt="clock" />
              <span>{{ career.time }}</span>
            </li>
            <li>
              <img src="/images/CareersView/Currency.svg" alt="dollar" />
              <span
                >{{ career.salaryFrom / 1000 }}K -
                {{ career.salaryTo / 1000 }}K</span
              >
            </li>
            <li>
              <img src="/images/CareersView/Location.svg" alt="location" />
              <span>{{ career.location }}</span>
            </li>
            <li class="view-btn">
              <a href="#">
                <span>View</span>
                <img src="/images/CareersView/View.svg" alt="view-more" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import careers from "../externals/Careers/careers";
import { computed, ref, inject } from "vue";

const props = defineProps(["isMobile"]);

const isMobile = inject("isOnMobileDevice");

const requirements = ref([
  {
    img: "Team",
    title: "Care about our team",
    subtitle:
      "understand what matters to our employees. Give them what they need to do their best work.",
  },
  {
    img: "Heart",
    title: "Be excellent to each other",
    subtitle:
      "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
  },
  {
    img: "Chart",
    title: "Pride in what we do",
    subtitle:
      "Value quality and integrity in everything we do. At all times. No exceptions.",
  },
  {
    img: "Smile",
    title: "Don't #!&$ the customer",
    subtitle:
      "Understand customers' stated and unstated needs. Make them wildly successful.",
  },
  {
    img: "Flag",
    title: "Do not impossible",
    subtitle:
      'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"',
  },
  {
    img: "Lightning",
    title: "Sweat the small stuff",
    subtitle:
      "We believe the best products come from the best attention to detail. Seat the small stuff.",
  },
]);

const currentActiveCategory = ref("All");

function setCurrentActiveCategory(newCategory) {
  if (currentActiveCategory.value === newCategory) {
    currentActiveCategory.value = "All";
    return;
  }
  currentActiveCategory.value = newCategory;
}

const careersCategories = ref([
  "All",
  "Design",
  "Development",
  "Engineering",
  "Marketing",
  "Sale",
]);
const SalaryFilterItems = ref({
  title: "Salary",
  items: [
    {
      text: "> $100,000",
      value: "greater",
    },
    {
      text: "< $100,000",
      value: "less",
    },
    {
      text: "All",
      value: "all",
    },
  ],
});

const selectedLocations = ref([]);
const selectedSalary = ref("all");
const locationFilterItems = ref({
  title: "Location",
  items: [
    {
      text: "Tehran, Iran",
      value: "tehran",
    },
    {
      text: "Helsinki, Finland",
      value: "helsinki",
    },
    {
      text: "Paris, France",
      value: "paris",
    },
  ],
});

const careersOutput = computed(() => {
  let careersClone = [...careers];

  if (selectedSalary.value === "greater")
    careersClone = careersClone.filter((c) => c.salaryTo > 100000);

  if (selectedSalary.value === "less")
    careersClone = careersClone.filter((c) => c.salaryTo < 100000);

  if (selectedLocations.value.length > 0) {
    careersClone = careersClone.filter((c) =>
      selectedLocations.value.includes(c.location)
    );
  }
  if (currentActiveCategory.value !== "All") {
    careersClone = careersClone.filter(
      (c) => c.tag === currentActiveCategory.value
    );
  }

  return careersClone;
});
</script>
