<template>
  <section class="contacts-view">
    <div class="contacts-header container">
      <h1>Contact Us</h1>
      <h2>Made with love, right here in Tehran</h2>
      <p>Come visit our friendly team at one of our offices.</p>
    </div>

    <div class="contacts-map container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.50843900483!2d51.347655249999995!3d35.707573749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1674928848409!5m2!1sen!2sde"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="contacts-contacts container">
      <div class="contacts-info">
        <div class="contacts-addresses">
          <!--    Don't need to bind the key attr    -->
          <div
            :class="`contacts-info-item contacts-${contact.title.toLowerCase()}`"
            v-for="contact in contactOptions"
          >
            <img
              :src="`/public/images/ContactsView/${contact.title}.svg`"
              :alt="`${contact.title}-icon`"
            />
            <div class="contacts-info-item-description">
              <h5>{{ contact.title }}</h5>
              <p>{{ contact.description }}</p>
              <span>{{ contact.subtitle }}</span>
            </div>
          </div>
        </div>
        <div class="contacts-socials">
          <a :href="social.link" v-for="social in socialMedias">
            <img
              :src="`/public/images/ContactsView/Socials/${social.title}.svg`"
              :alt="social.title"
            />
          </a>
        </div>
      </div>
      <div class="contacts-form">
        <h3 class="contacts-form-title">Level Up Your Brand</h3>
        <!--    Transition Group is placed here    -->
        <transition-group name="form-slider">
          <div
            class="contacts-form-page-1"
            v-if="currentFormIndex === 0"
            :key="1"
          >
            <div
              class="contacts-form-item"
              v-for="(option, index) in contactBuiltinForm"
              :key="index"
              :class="{
                checked: userSelectedOptionsInForm.indexOf(option.title) >= 0,
              }"
              @click="addUserOption"
            >
              <input
                type="checkbox"
                name="service"
                :value="option.title"
                v-model="userSelectedOptionsInForm"
              />
              <img
                :src="`/public/images/ContactsView/Form/${
                  option.img || option.title
                }.svg`"
                :alt="option.title"
              />
              <h5>{{ option.title }}</h5>
              <p>{{ option.subtitle }}</p>
            </div>
          </div>

          <form
            class="contacts-form-page-2"
            :key="2"
            v-if="currentFormIndex === 1"
          >
            <div class="input-group">
              <input
                type="text"
                name="fName"
                id="userFName"
                placeholder="First Name"
                v-model="fName"
              />
              <input
                type="text"
                name="lName"
                id="userLName"
                placeholder="Last Name"
                v-model="lName"
              />
              <input
                type="text"
                name="nCode"
                id="userNCode"
                placeholder="National Code"
                v-model="nCode"
              />
            </div>
            <div class="input-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                v-model="email"
              />
            </div>
            <div class="input-group">
              <select name="country" v-model="country">
                <option :value="country" v-for="country in countries">
                  {{ country }}
                </option>
              </select>
              <input
                type="tel"
                placeholder="Phone, ex: 1234567890"
                v-model="phone"
              />
            </div>
            <div class="input-group">
              <textarea
                placeholder="What Do We Need to Know"
                v-model="description"
              ></textarea>
            </div>
          </form>

          <div
            class="contacts-form-page-3"
            :key="3"
            v-if="currentFormIndex === 2"
          >
            <p class="contacts-form-result-text">
              Hello,<br />my name is <span>{{ fName }}</span>
              <span>{{ lName }}</span> I'm from <span>{{ country }}</span> with
              national code of <span>{{ nCode }}</span
              >.<br />
              I need these services which is listed below:
            </p>
            <ul>
              <li v-for="service in userSelectedOptionsInForm">
                <p>
                  - <span>{{ service }}</span>
                </p>
              </li>
            </ul>
            <p>About my project:</p>
            <span>{{ description }}</span>
          </div>

          <div
            class="contacts-form-page-last"
            key="4"
            v-if="currentFormIndex === 3"
          >
            <img
              src="/images/ContactsView/Form/Checklist.png"
              alt="checklist"
            />
            <p>Your request has been sent successfully. Have good time!</p>
          </div>
        </transition-group>
        <div class="form-footer" v-if="currentFormIndex !== 3">
          <p class="contacts-form-error-text" v-if="formErr">{{ formErr }}</p>

          <div class="slides-bullet">
            <span
              v-for="(_, index) in 3"
              :class="{ 'active-slide': currentFormIndex === index }"
              @click="changeCurrentFormIndex(index)"
            ></span>
          </div>
          <button @click="incrementFormIndex" type="button">
            {{ currentFormIndex === 2 ? "Agree & Submit" : "Continue" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import countries from "../externals/Countries.js";

const contactOptions = ref([
  {
    title: "Chat",
    subtitle: "hi@tuc.com",
    description: "Our friendly team is here to help.",
  },
  {
    title: "Location",
    subtitle: "100 smith street Collingwood VIC 3066 AU",
    description: "Come say hello at our office HQ.",
  },
  {
    title: "Phone",
    subtitle: "+1 (469) 296 - 9656",
    description: "Sat-Thu from 8am to 5pm.",
  },
]);
const contactBuiltinForm = ref([
  {
    subtitle: "I need a app built",
    title: "Development",
  },
  {
    subtitle: "I need a app design",
    title: "Design",
  },
  {
    subtitle: "I want to grow my blog",
    title: "Content Creation",
    img: "ContentCreation",
  },
  {
    subtitle: "Help me grow organically",
    title: "SEO",
  },
  {
    subtitle: "I want to sell my products",
    title: "Digital Marketing",
    img: "DigitalMarketing",
  },
  {
    subtitle: "I want to create my brand",
    title: "Branding",
  },
  {
    subtitle: "I want a promotional video",
    title: "Motion Design",
    img: "MotionDesign",
  },
  {
    subtitle: "I want to sketch my logo",
    title: "Illustration",
  },
  {
    subtitle: "We're here to help!",
    title: "Something else",
    img: "SomethingElse",
  },
]);

const socialMedias = ref([
  {
    link: "https://google.com",
    title: "Twitter",
  },
  {
    link: "https://google.com",
    title: "Facebook",
  },
  {
    link: "https://google.com",
    title: "Linkedin",
  },
  {
    link: "https://google.com",
    title: "Github",
  },
  {
    link: "https://google.com",
    title: "Youtube",
  },
  {
    link: "https://google.com",
    title: "Dribbble",
  },
]);

const formErr = ref("");
const currentFormIndex = ref(0);
const userSelectedOptionsInForm = ref([]);

const fName = ref("");
const lName = ref("");
const nCode = ref("");
const email = ref("");
const country = ref("Select Country");
const phone = ref("");
const description = ref("");

function addUserOption(e) {
  let selectedOptionIndex = userSelectedOptionsInForm.value.indexOf(
    e.target.childNodes[0].value
  );
  if (selectedOptionIndex >= 0) {
    userSelectedOptionsInForm.value.splice(selectedOptionIndex, 1);
  } else userSelectedOptionsInForm.value.push(e.target.childNodes[0].value);
}

function incrementFormIndex() {
  formErr.value = "";
  if (userSelectedOptionsInForm.value.length === 0) {
    formErr.value = "Select some services to continue!";
    return;
  }

  let isInputsFieldEmpty = !!(
    fName.value.trim() === "" ||
    lName.value.trim() === "" ||
    nCode.value.trim() === "" ||
    email.value.trim() === "" ||
    country.value === "Select Country" ||
    phone.value.trim() === "" ||
    description.value.trim() === ""
  );

  if (currentFormIndex.value === 1 && isInputsFieldEmpty) {
    formErr.value = "Fill the form to continue!";
    return;
  }

  if (currentFormIndex.value === 2 && isInputsFieldEmpty) {
    formErr.value = "Go back and fill the forms!";
    return;
  }
  currentFormIndex.value++;
}

// watch if form index is last one
watch(currentFormIndex, (newVal) => {
  if (newVal === 3) {
    // send api req to DB

    setTimeout(() => {
      currentFormIndex.value = 0;
    }, 7000);
    userSelectedOptionsInForm.value = [];
    fName.value = "";
    lName.value = "";
    email.value = "";
    nCode.value = "";
    country.value = "Select Country";
    phone.value = "";
    description.value = "";
  }
});

function changeCurrentFormIndex(index) {
  currentFormIndex.value = index;
}
</script>
