<template>
  <div class="modal" id="becomeMemberModal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">Become an Orked Member</p>
        <button
          class="delete"
          aria-label="close"
          @click.prevent="closeModal"
        ></button>
      </div>
      <div class="modal-card-body">
        <div class="sub-text-container">
          <p class="sub-text">Join Our Mailing List</p>
          <p class="small-text">For exclusive news, events and promotions</p>
        </div>

        <form>
          <div class="columns is-desktop">
            <div class="field column">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input is-small"
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div class="field column">
              <label class="label">Last Name</label>
              <div class="control">
                <input
                  class="input is-small"
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
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
              <label class="label">Phone Number (Optional)</label>
              <div class="control is-flex">
                <div class="select is-small">
                  <select name="phone-code">
                    <option value="null">+00</option>
                    <option
                      v-for="phone of allcountriesandPhones"
                      :key="phone.name"
                      :value="phone.dial_code"
                    >
                      {{ phone.dial_code }}
                    </option>
                  </select>
                </div>
                <input
                  class="input is-small"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <label class="label">Country</label>
              <div class="control">
                <div class="select is-small">
                  <select name="country">
                    <option value="null">Select country</option>
                    <option
                      v-for="country of allcountriesandPhones"
                      :key="country.code"
                      :value="country.code"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field column">
              <label class="label">Gender</label>
              <div class="control">
                <div class="select is-small is-fullwidth">
                  <select name="gender">
                    <option value="null">Select gender</option>
                    <option
                      v-for="gender of genders"
                      :key="gender.gender"
                      :value="gender.gender"
                    >
                      {{ gender.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <label class="label">Birth Date</label>
              <div class="control">
                <input
                  class="input is-small"
                  type="text"
                  name="dob"
                  placeholder="Birth Date"
                />
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  I would like to receive communication from the Orked Team.
                </label>
              </div>
            </div>
          </div>

          <div class="discrete-text">
            <small
              >By subscribing to our newsletter you agree to receive email
              communicaton from us. Withdraw any time by clicking the
              'Unsubscribe' link in your email.</small
            >
          </div>

          <div class="columns mt-4">
            <div class="column">
              <input class="button" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-card-foot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { toggleModal } from "@/shared/ui";
import { defineComponent, ref } from "vue";
import { countriesAndPhones } from "../shared/countriesandphone";

export default defineComponent({
  setup() {
    const allcountriesandPhones = ref(countriesAndPhones);
    const genders = ref([
      { gender: "male", name: "Male" },
      { gender: "female", name: "Female" },
    ]);

    function closeModal() {
      toggleModal("becomeMemberModal", false);
    }

    return {
      closeModal,
      genders,
      allcountriesandPhones,
    };
  },
});
</script>

<style lang="less" scoped>
.modal-card {
  .modal-card-title {
    font-size: 1.7em;
    letter-spacing: 1px;
  }
  .sub-text-container {
    text-align: center;
    .sub-text {
      font-size: 1.5em;
      letter-spacing: 1px;
    }

    .small-text {
      font-size: 1em;
      letter-spacing: 0.5px;
    }
  }
}

// media queries
@media screen and (max-width: 200px) {
  .modal-card {
    .modal-card-head {
      display: flex;
      flex-direction: column-reverse;
      .modal-card-title {
        font-size: 1em;
      }
    }
  }
}

@media screen and (min-width: 200px) and (max-width: 400px) {
  .modal-card {
    .modal-card-head {
      display: flex;
      flex-direction: column-reverse;

      .modal-card-title {
        font-size: 1.5em;
      }
    }
  }
}
</style>
