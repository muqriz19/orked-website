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
              <label class="label">Full Name</label>
              <div class="control">
                <input
                  class="input is-small"
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  v-model="form.fullname"
                />
              </div>

              <div
                class="input-errors"
                v-for="error of v$.fullname.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-small"
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="form.email"
                />
              </div>

              <div
                class="input-errors"
                v-for="error of v$.email.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <label class="label">Country</label>
              <div class="control">
                <div class="select is-small">
                  <select name="country" v-model="form.country">
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

              <div
                class="input-errors"
                v-for="error of v$.country.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="field column">
              <label class="label">Gender</label>
              <div class="control">
                <div class="select is-small is-fullwidth">
                  <select name="gender" v-model="form.gender">
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

              <div
                class="input-errors"
                v-for="error of v$.gender.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <label class="label">Birth Date</label>
              <div class="control">
                <datepicker v-model="form.dob" class="input is-small" />
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="form.agree" />
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
              <button
                class="button"
                type="button"
                :disabled="v$.invalid"
                @click="onBecomeMember"
              >
                Submit
              </button>
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
import { defineComponent, onMounted, reactive, ref } from "vue";
import { countriesAndPhones } from "../shared/countriesandphone";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import Datepicker from "vue3-datepicker";

export default defineComponent({
  components: {
    datepicker: Datepicker,
  },
  setup() {
    const allcountriesandPhones = ref(countriesAndPhones);
    const genders = ref([
      { gender: "male", name: "Male" },
      { gender: "female", name: "Female" },
    ]);

    const form = reactive({
      fullname: "",
      email: "",
      phoneCode: "null",
      // phone: "",
      dob: new Date(),
      gender: "null",
      country: "null",
      agree: false,
    });

    const cannotBeNull = (value: string) => value.includes("null");
    const cannotBeEmpty = (value: string) => value === "";

    const rules = {
      fullname: {
        required: helpers.withMessage("Fullname is required", required),
        cannotBeEmpty,
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Valid email is required", email),
        cannotBeEmpty,
      },
      // phone: {},
      dob: {
        required: helpers.withMessage("Date of Birth is required", required),
      },
      gender: {
        required: helpers.withMessage("Select a gender", required),
        cannotBeNull,
      },
      country: {
        required: helpers.withMessage("Country is required", required),
        cannotBeNull,
      },
      agree: {
        required: helpers.withMessage(
          "Agree to terms and conditions required",
          required
        ),
      },
    };

    const v$ = useVuelidate(rules, form);

    onMounted(() => {
      v$.value.$touch();
    });

    function closeModal() {
      toggleModal("becomeMemberModal", false);
    }

    function onBecomeMember() {
      console.log(form);
      console.dir(form);
    }

    return {
      closeModal,
      genders,
      allcountriesandPhones,
      form,
      v$,
      onBecomeMember,
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
