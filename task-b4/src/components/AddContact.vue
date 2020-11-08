<template>
  <div class="text-left mb-3">
    <h3>Add Contact</h3>
    <b-card>
      <b-form @submit.prevent="onSubmit" v-if="show">
        <b-form-group label="Name:">
          <b-form-input required
            v-model="name"
            placeholder="What's your name?"
            type="text">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Email:">
          <b-form-input required 
            v-model="email"
            placeholder="What's your email?"
            type="email">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Gender:">
          <b-form-radio-group required v-model="gender">
            <b-form-radio value="Male">Male</b-form-radio>
            <b-form-radio value="Female">Female</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group label="Phone:">
          <b-form-input required 
            v-model="phone"
            placeholder="8 digits..."
            pattern="[0-9]{8}"
            type="tel">
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddContact",
  methods: {
    ...mapActions(['addContact']),
    onSubmit() {
      this.addContact({
        name: this.name, 
        email: this.email, 
        gender: this.gender, 
        phone: this.phone
      });
      // Clear form
      this.name= "";
      this.email = "";
      this.gender = "";
      this.phone = "";
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
  data() {
      return {
        name: "",
        email: "",
        gender: "",
        phone: "",
        show: true,
      }
  },
}
</script>

<style>

</style>