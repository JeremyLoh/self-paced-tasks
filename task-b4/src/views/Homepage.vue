<template>
  <b-container>
    <AddContact class="mt-3"/>
    <Contact @showEditModal="handleEditModal" />

    <b-modal ref="edit-contact"
      title="Edit Contact"
      @ok="updateContact">
      <b-form>
        <b-form-group label="Name:">
          <b-form-input required
            v-model="contact.name"
            placeholder="What's your name?"
            type="text">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Email:">
          <b-form-input required 
            v-model="contact.email"
            placeholder="What's your email?"
            type="email">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Gender:">
          <b-form-radio-group required v-model="contact.gender">
            <b-form-radio value="Male">Male</b-form-radio>
            <b-form-radio value="Female">Female</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group label="Phone:">
          <b-form-input required 
            v-model="contact.phone"
            placeholder="8 digits..."
            pattern="[0-9]{8}"
            type="tel">
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import Contact from '../components/Contact';
import AddContact from '../components/AddContact';

export default {
  name: 'Homepage',
  data() {
    return {
      contact: {
        _id: '',
        name: '',
        email: '',
        gender: '',
        phone: '',
      },
    }
  },
  components: {
    Contact,
    AddContact,
  },
  methods: {
    ...mapActions(['editContact']),
    handleEditModal(contact) {
      this.contact._id = contact._id;
      this.contact.name = contact.name;
      this.contact.email = contact.email;
      this.contact.gender = contact.gender;
      this.contact.phone = contact.phone;
      this.$refs["edit-contact"].show();
    },
    updateContact() {
      this.editContact(this.contact);
    }
  },
}
</script>

<style scoped>

</style>
