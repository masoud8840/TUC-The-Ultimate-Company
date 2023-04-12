<template>
  <section class="faq-view">
    <div class="faq-container faq-header container">
      <h1>FAQs</h1>
      <h2>Have Questions? We’re Here to Help</h2>
      <p>Everything you need to know about the product and billing.</p>
    </div>
    <div class="faq-container faq-body container">
      <div class="search-input-container">
        <input
          type="text"
          id="faq-search"
          placeholder="Search something..."
          v-model="faqSearchbar"
          autocomplete="off"
        />
        <img src="/images/FAQsView/Search.svg" alt="search-icon" />
      </div>

      <div class="faq-items-list">
        <ul>
          <li v-for="faq in faqCategories" :key="faq">
            <button
              :class="{ 'currently-active': currentlyActiveFAQ === faq.title }"
              @click="setCurrentlyActiveFAQ(faq.title)"
            >
              <img
                :src="`/images/HomeView/FAQs/${faq.img}.png`"
                :alt="faq.img"
              />
              <span>{{ faq.title }}</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="faq-breadcrumb">
        <p>
          FAQs >
          <span>{{ currentlyActiveFAQ }}</span>
        </p>
      </div>
    </div>

    <div class="questions-container">
      <ul>
        <li v-for="question in showFaqQuestions" :key="question">
          <div class="container">
            <details>
              <summary>
                {{ question.question }}
              </summary>
              <p>{{ question.answer }}</p>
            </details>
            <img
              class="circle-plus-icon"
              src="/images/FAQsView/CirclePlus.svg"
              alt="plus"
            />
            <img
              class="circle-minus-icon"
              src="/images/FAQsView/CircleMinus.svg"
              alt="minus"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import faqQuestions from "../externals/FAQs/faqs";

const currentlyActiveFAQ = ref("General");

function setCurrentlyActiveFAQ(faq) {
  if (currentlyActiveFAQ.value === faq) currentlyActiveFAQ.value = "General";
  else currentlyActiveFAQ.value = faq;
}

const showFaqQuestions = computed(() => {
  let faqs = [...faqQuestions];

  if (currentlyActiveFAQ.value !== "General") {
    faqs = faqs.filter((faq) => faq.tag === currentlyActiveFAQ.value);
  }

  if (faqSearchbar.value.trim() !== "") {
    faqs = faqs.filter((faq) =>
      faq.question.toLocaleLowerCase().includes(faqSearchbar.value)
    );
  }
  return faqs;
});

const faqSearchbar = ref("");
const faqCategories = ref([
  {
    img: "AccountManagement",
    title: "Account Management",
  },
  {
    img: "Delivery",
    title: "Delivery",
  },
  {
    img: "Payments",
    title: "Payments",
  },
  {
    img: "ProductsIssues",
    title: "Products Issue",
  },
  {
    img: "Guarantee",
    title: "Guarantee",
  },
  {
    img: "ReturnAndRefund",
    title: "Return & Refund",
  },
]);
</script>
