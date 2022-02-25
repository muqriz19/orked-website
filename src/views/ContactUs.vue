<template>
  <div class="contactUsPageContainer">
    <div class="columns is-desktop">
      <form class="column">
        <p class="form-heading">How can we help?</p>
        <div class="columns is-desktop">
          <div class="field column">
            <label class="label">Fullname</label>
            <div class="control">
              <input
                class="input is-small"
                type="text"
                name="fullname"
                placeholder="fullname"
              />
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input is-small"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="field column">
            <label class="label">Message</label>
            <div class="control">
              <input
                class="input is-small"
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>
          </div>
        </div>

        <div class="columns mt-4">
          <div class="column">
            <input class="button" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUsPage",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.contactUsPageContainer {
  height: inherit;
  padding: 10px;

  form {
    margin: 0 auto;
    max-width: 500px;

    .form-heading {
      text-align: center;
      font-size: 1.5em;
    }
  }
}

@media screen and (max-width: 700px) {
  .contactUsPageContainer {
    form {
      max-width: unset;
    }
  }
}
</style>
