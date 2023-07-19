<template>
  <section class="dashboard-view-inner dashboard-authentication-container">
    <section class="breadcrumb">
      <div v-for="(item, index) in breadcrumbItems" :key="index">
        <a :href="`#${item.hash}`" @click="setActiveTab(item.hash)"
          >{{ item.title }} Verification</a
        >
        <Arrow />
      </div>
    </section>

    <section class="dashboard-authentication-inner">
      <section
        class="dashboard-authentication-email"
        v-if="activeTab === 'emailAddressVerification'"
      >
        <h2>Confirm Your Email</h2>
        <div class="input-group">
          <input type="text" placeholder="Your email here" />
          <img src="/images/AccountView/Email.svg" alt="password-icon" />
        </div>
        <div class="input-group-caption">
          <span>
            Check your email to get the verification link, didn’t get the email?
          </span>
          <button>Resend</button>
        </div>

        <div class="dashboard-authentication-2FAcheck">
          <input type="checkbox" id="2FA-check" />
          <label for="2FA-check">Also activate 2FA on this email address</label>
        </div>
      </section>

      <section
        class="dashboard-authentication-address"
        v-if="activeTab === 'addressVerification'"
      >
        <h2>Confirm Your Address</h2>
        <ul class="dashboard-authentication-address-options">
          <li
            v-for="(item, index) in addressOptions"
            :key="index"
            :class="{ active: item.description === activeAddressOption }"
            @click="setActiveAddressOption(item.description)"
          >
            <component :is="item.component"></component>
            <h4>{{ item.description }}</h4>
          </li>
        </ul>
        <div class="address-verification-file-input">
          <input type="file" />
          <img
            src="/images/DashboardView/Settings/Upload.svg"
            alt="upload-icon"
          />
          <p><span>Click to Upload</span> or drag and drop SVG, PNG or JPG</p>
        </div>
      </section>
    </section>

    {{ isOnMobileDevice }}
  </section>
</template>

<script setup>
import { inject, ref, shallowRef } from "vue";
import Arrow from "../../UI/Dashboard/Arrow.vue";
import Cellphone from "../../icon/Dashboard/Cellphone.vue";
import UtilityBill from "../../icon/Dashboard/UtilityBill.vue";
import CheckStub from "../../icon/Dashboard/CheckStub.vue";

const isOnMobileDevice = inject("isOnMobileDevice");

const activeTab = ref("emailAddressVerification");
const breadcrumbItems = ref([
  {
    title: "Email Address",
    hash: "emailAddressVerification",
  },
  {
    title: "Address",
    hash: "addressVerification",
  },
  {
    title: "Identity",
    hash: "identityVerification",
  },
  {
    title: "Phone Number",
    hash: "phoneNumberVerification",
  },
]);

function setActiveTab(tabName) {
  activeTab.value = tabName;
}

const addressOptions = shallowRef([
  { component: Cellphone, description: "Cell Phone" },
  { component: UtilityBill, description: "Utility Bill" },
  { component: CheckStub, description: "Payment Check Stub" },
]);
const activeAddressOption = ref("Cell Phone");
function setActiveAddressOption(optionDescription) {
  activeAddressOption.value = optionDescription;
}
</script>
