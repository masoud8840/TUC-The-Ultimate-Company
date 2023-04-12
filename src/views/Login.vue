<template>
  <article class="login-view">
    <div class="login-view-inner container">
      <section class="login-inner">
        <h3>Login to Your Account</h3>
        <div class="login-with-social">
          <button>
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
        <form class="login-form" @submit.prevent="Login">
          <div class="input-group">
            <input
              type="email"
              id="login-email"
              placeholder="Email"
              v-model="email"
            />
            <img src="/images/AccountView/Email.svg" alt="email-icon" />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              v-model="password"
            />
            <img src="/images/AccountView/Password.svg" alt="password-icon" />
          </div>

          <div class="input-group">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember Me?</label>
            <router-link to="/reset">I forgot my password</router-link>
          </div>

          <p class="login-log-msg" v-if="err">
            {{ err }}
          </p>

          <div class="input-group submit-btns">
            <router-link :to="{ name: 'Signup' }">SIGN UP</router-link>
            <button type="submit" class="submit-login-form-btn">SIGN IN</button>
          </div>
        </form>
      </section>
      <section class="login-banner">
        <h3>New Here?</h3>
        <p>Signup and discover a great amount of new opportunities</p>
        <router-link :to="{ name: 'Signup' }" class="signup-btn" type="button">
          SIGN UP
        </router-link>
        <div class="circle"></div>
      </section>
    </div>
  </article>
</template>

<script setup>

</script>
