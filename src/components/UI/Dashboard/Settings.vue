<template>
  <section class="dashboard-view-inner dashboard-settings-container">
    <article class="settings-profile">
      <h3>Profile</h3>
      <hr class="header-divider" />

      <section class="settings-subsections">
        <article class="settings-subsection settings-username">
          <div class="settings-description">
            <h4 class="settings_subsection-title">Username</h4>
            <p class="settings_subsection-subtitle">
              This will be shown as your name
            </p>
          </div>
          <div class="settings-input">
            <input type="text" id="usernameInput" placeholder="*" />
          </div>
        </article>
        <article class="settings-subsection settings-picture">
          <div class="settings-description">
            <h4 class="settings_subsection-title">Picture</h4>
            <p class="settings_subsection-subtitle">
              This is your profile photo shown on top right corner
            </p>
          </div>
          <div class="settings-input col-2">
            <img
              src="/images/DashboardView/JulieFromTUC.svg"
              alt="profile-picture"
              class="profile-photo-placeholder"
            />
            <div class="profile-photo-file-input">
              <input type="file" />
              <img
                src="/images/DashboardView/Settings/Upload.svg"
                alt="upload-icon"
              />
              <p>
                <span>Click to Upload</span> or drag and drop SVG, PNG, JPG, or
                GIG (max 400x400)
              </p>
            </div>
          </div>
        </article>
      </section>
    </article>

    <!-- Account Settings -->
    <article class="settings-account">
      <h3>Account</h3>
      <hr class="header-divider" />

      <section class="settings-subsections">
        <article class="settings-subsection settings-accountsettings">
          <div class="settings-description">
            <h4 class="settings_subsection-title">Account Settings</h4>
            <p class="settings_subsection-subtitle">
              Here you can change your account information
            </p>
            <span class="badge badge-verified">Verified</span>
          </div>
          <div class="settings-input row-2">
            <div class="settings-input col-2">
              <input
                type="text"
                id="shownName"
                placeholder="Shown Name"
                value=""
              />
              <input
                type="email"
                id="userEmail"
                placeholder="Email*"
                value="gharedaghi.zip@gmail.com"
              />
            </div>
            <div class="settings-input col-2">
              <input
                type="text"
                id="firstName"
                placeholder="First Name*"
                value="Masoud"
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name*"
                value="Gharedaghi"
              />
            </div>
            <div class="settings-input">
              <input
                type="text"
                id="job"
                placeholder="What do you do as Job?"
                value=""
              />
            </div>
            <div class="settings-input">
              <textarea id="aboutUser" placeholder="About You:"></textarea>
            </div>
          </div>
        </article>

        <!-- Billing -->
        <article class="settings-billing">
          <h3>Billing Method</h3>
          <hr class="header-divider" />

          <section class="settings-subsections">
            <article class="settings-subsection settings-carddetails">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Card Details</h4>
                <p class="settings_subsection-subtitle">
                  This card will used as your payment card
                </p>
              </div>
              <div class="settings-input">
                <input type="text" id="usernameInput" placeholder="*" />
              </div>
            </article>
            <article class="settings-subsection settings-emailaddress">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Email Address</h4>
                <p class="settings_subsection-subtitle">
                  Invoices will be sent to this email address
                </p>
              </div>
              <div class="settings-input row-2">
                <input
                  type="text"
                  placeholder="*"
                  value="gharedaghi.zip@gmail.com"
                />
                <button class="add-email-address-btn">
                  <img
                    src="/images/DashboardView/Settings/Pus.svg"
                    alt="plus"
                  />
                  add another email
                </button>
              </div>
            </article>
            <article class="settings-subsection settings-streetaddress">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Street Address</h4>
              </div>
              <div class="settings-input">
                <input type="text" placeholder="*" />
              </div>
            </article>
            <article class="settings-subsection settings-state-province">
              <div class="settings-description">
                <h4 class="settings_subsection-title">State/Province</h4>
              </div>
              <div class="settings-input col-2">
                <input type="text" placeholder="*" />
                <input type="text" placeholder="" />
              </div>
            </article>
            <article class="settings-subsection settings-city">
              <div class="settings-description">
                <h4 class="settings_subsection-title">City</h4>
              </div>
              <div class="settings-input">
                <input type="text" placeholder="*" />
              </div>
            </article>
            <article class="settings-subsection settings-country">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Country</h4>
              </div>
              <div class="settings-input">
                <select>
                  <option value="USA">
                    <img
                      src="/images/DashboardView/Settings/USA.svg"
                      alt="plus"
                    />
                    United State of America
                  </option>
                </select>
              </div>
            </article>
          </section>
        </article>

        <!-- Security -->
        <article class="settings-security">
          <h3>Security</h3>
          <hr class="header-divider" />

          <section class="settings-subsections">
            <article class="settings-subsection">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Change Password</h4>
                <p class="settings_subsection-subtitle">
                  Here you can set your new password
                </p>
                <span class="badge badge-gray"> Last Change 2 days ago </span>
              </div>
              <div class="settings-input row-2">
                <input type="text" placeholder="Old password" />
                <input type="text" placeholder="New password" />
                <input type="text" placeholder="Bew password confirmation" />
              </div>
            </article>
            <article class="settings-subsection">
              <div class="settings-description">
                <h4 class="settings_subsection-title">
                  2-Factor Authentication
                </h4>
                <p class="settings_subsection-subtitle">
                  Here you can secure your account
                </p>
                <span class="badge badge-disabled">Disabled</span>
              </div>
              <div class="settings-input row-2">
                <div class="settings-input col-2">
                  <div>
                    <span>App</span>
                  </div>
                  <div class="ml-auto gap-15">
                    <span class="settings-status">Not Configured</span>
                    <button>Setup</button>
                  </div>
                </div>
                <div class="settings-input col-2">
                  <div>
                    <span>Email</span>
                  </div>
                  <div class="ml-auto gap-15">
                    <span class="settings-status"
                      >gharedaghi.zip@gmail.com</span
                    >
                    <button>Setup</button>
                  </div>
                </div>
                <div class="settings-input col-2">
                  <div>
                    <span>Phone</span>
                  </div>
                  <div class="ml-auto gap-15">
                    <span class="settings-status">+98 937 0700 162</span>
                    <button>Setup</button>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </article>

        <!-- Notifications -->
        <article class="settings-notifications">
          <h3>Notifications</h3>
          <hr class="header-divider" />

          <section class="settings-subsections">
            <article class="settings-subsection">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Email Notifications</h4>
                <p class="settings_subsection-subtitle">
                  Get emails to find out what’s going on
                </p>
              </div>
              <div class="settings-input col-2">
                <div>
                  <h5>News and Updates</h5>
                  <p>News about product and feature updates</p>
                </div>
                <Switch />
              </div>
            </article>
            <article class="settings-subsection">
              <div class="settings-description"></div>
              <div class="settings-input col-2">
                <div>
                  <h5>Reminders</h5>
                  <p>
                    These are notifications to remind you of changes to your
                    profile, payments, and projects progress
                  </p>
                </div>
                <Switch />
              </div>
            </article>

            <article class="settings-subsection">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Push Notifications</h4>
                <p class="settings_subsection-subtitle">
                  Get push notifications in-app to find out what’s going on
                </p>
              </div>
              <div class="settings-input col-2">
                <div>
                  <h5>News and Updates</h5>
                  <p>News about product and feature updates</p>
                </div>
                <Switch />
              </div>
            </article>
            <article class="settings-subsection">
              <div class="settings-description"></div>
              <div class="settings-input col-2">
                <div>
                  <h5>Reminders</h5>
                  <p>
                    These are notifications to remind you of changes to your
                    profile, payments, and projects progress
                  </p>
                </div>
                <Switch />
              </div>
            </article>

            <article class="settings-subsection">
              <div class="settings-description">
                <h4 class="settings_subsection-title">Newsletter</h4>
                <p class="settings_subsection-subtitle">
                  Get push notifications in-app to find out what’s going on
                </p>
              </div>
              <div class="settings-input col-2">
                <div>
                  <h5>Weekly Newsletter</h5>
                  <p>Get notified about articles, discounts and new products</p>
                </div>
                <Switch />
              </div>
            </article>
            <article class="settings-subsection">
              <div class="settings-description"></div>
              <div class="settings-input col-2">
                <div>
                  <h5>Promotions</h5>
                  <p>
                    Get personalized offers and emails based on your orders and
                    preferences
                  </p>
                </div>
                <Switch />
              </div>
            </article>
            <article class="settings-subsection">
              <div class="settings-description"></div>
              <div class="settings-input col-2">
                <div>
                  <h5>Product Updates</h5>
                  <p>
                    Get notified when we made changes to our service/product
                  </p>
                </div>
                <Switch />
              </div>
            </article>
          </section>
        </article>
      </section>
    </article>
  </section>
</template>

<script setup>
import Switch from "../Switch.vue";
</script>
