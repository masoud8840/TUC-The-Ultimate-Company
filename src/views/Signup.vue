<template>
  <article class="signup-view" id="signup">
    <div class="signup-view-inner container">
      <section class="signup-banner">
        <h3>Welcome Back!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <router-link :to="{ name: 'Login' }" class="login-btn" type="button">
          SIGN IN
        </router-link>
        <div class="circle"></div>
      </section>
      <section class="signup-inner">
        <h3>Create Account</h3>
        <div class="login-with-social">
          <button @click="SignupWithGoogle">
            <img src="/images/AccountView/GooglePlus.svg" alt="google-plus" />
          </button>
          <button>
            <img src="/images/AccountView/Facebook.svg" alt="facebook" />
          </button>
          <button>
            <img src="/images/AccountView/Linkedin.svg" alt="linkedin" />
          </button>
          <button>
            <img src="/images/AccountView/Github.svg" alt="github" />
          </button>
        </div>
        <span>OR</span>
        <form class="signup-form" @submit.prevent="handleSignup">
          <div class="input-group">
            <input
              type="text"
              id="signup-username"
              placeholder="Display Name"
              v-model="user.displayName"
            />
            <img src="/images/AccountView/User.svg" alt="username-icon" />
          </div>
          <div class="input-group">
            <input
              type="email"
              id="signup-email"
              placeholder="Email"
              v-model="user.email"
            />
            <img src="/images/AccountView/Email.svg" alt="email-icon" />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="signup-password"
              placeholder="Password"
              v-model="user.password"
            />
            <img src="/images/AccountView/Password.svg" alt="password-icon" />
          </div>

          <p class="signup-log-msg" v-if="error">
            {{ error }}
          </p>

          <div class="input-group submit-btns">
            <router-link :to="{ name: 'Login' }">SIGN IN</router-link>
            <button type="submit" class="submit-login-form-btn">SIGN UP</button>
          </div>
        </form>
      </section>
    </div>
  </article>
</template>

<script setup>
import { reactive } from "vue";
import getSignup from "../composables/useSignup.js";
const user = reactive({
  displayName: "",
  email: "",
  password: "",
});

const { useSignup, error } = getSignup();
const handleSignup = async () => {
  await useSignup(user.email, user.password, user.displayName);
};
</script>
