<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Final Steps</div>
          <br />
        </md-card-header>

        <md-card-content>
             <div>
            <div>
              <md-field :class="getValidationClass('occupation')">
                <label for="occupation">Occupation*</label>
                <md-select
                  name="occupation"
                  id="occupation"
                  v-model="form.occupation"
                  md-dense
                  :disabled="sending"
                >
                  <md-option value="Unemployed">Unemployed</md-option>
                  <md-option value="Employed">Employed</md-option>
                  <md-option value="Student">Student</md-option>
                  <md-option value="Retired">Retired</md-option>
                </md-select>
                <span class="md-error">The occupation is required</span>
              </md-field>
            </div>
          </div>
          <br/>
          <div class="md-layout md-gutter">
            <div class="check">
              <h2>Interests</h2>
              <!-- <br/> -->
              <md-checkbox v-model="tech">Technology</md-checkbox>
              <md-checkbox v-model="entert">Entertainment</md-checkbox>
              <md-checkbox v-model="transport">Transportaion</md-checkbox>
              <md-checkbox v-model="food">Food</md-checkbox>
            </div>
          </div>
<br/>
         
          <div>
              <div class="check">
              <h2>Risk</h2>
              <!-- <br/> -->
              <md-radio v-model="radio" value="risk">Big Risks</md-radio>
              <md-radio v-model="radio" value="not-sure">Doesn't Matter</md-radio>
              <md-radio v-model="radio" value="safe">Safe</md-radio>
            </div>
              </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Finish</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
} from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    tech: false,
    transport: false,
    entert: false,
    food: false,
    radio: null,
    form: {
      occupation: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      
      occupation: {
        required
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.occupation = null;
      this.radio = null;

      this.transport = null;
      this.entert = null;
      this.food = null;
      this.tech = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
form {
  margin: auto;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}
.md-checkbox {
  /* margin: auto; */
  /* display: flex; */
}
.check {
  margin: auto;
}
table {
  margin: auto;
  width: 100%;
  table-layout: fixed;
}
th {
  text-align: left;
}
</style>
