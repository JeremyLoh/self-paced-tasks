<template>
  <b-container class="contacts">
    <h3>Contacts</h3>
    <b-row v-for="contact in allContacts" 
      :key="contact.contact_id" 
      class="contact" 
      style="margin: 1em;">
      <b-col cols="12">
        <b-card
          :header="contact.name"
          header-bg-variant="dark"
          border-variant="dark"
          header-text-variant="white">
          <b-list-group flush>
            <b-list-group-item>
              <b-icon-mailbox animation="fade"></b-icon-mailbox>
              {{ contact.email }}
            </b-list-group-item>

            <b-list-group-item>
              <b-icon-person></b-icon-person>
              {{ contact.gender }}
            </b-list-group-item>
            
            <b-list-group-item>
              <b-icon-telephone></b-icon-telephone>
              {{ contact.phone }}
            </b-list-group-item>
            
            <b-list-group-item>
              <b-icon-calendar-date></b-icon-calendar-date>
              {{ contact.create_date }}
            </b-list-group-item>
          </b-list-group>
          
          <div class="text-right">
            <b-button @click.prevent="onDelete(contact)" variant="danger">
              Delete
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// Map getters from Vuex
import { mapGetters, mapActions } from 'vuex';
// mapGetters(['allContacts']) allows us to use getter defined
export default {
  name: 'Contact',
  methods: {
    ...mapActions(['fetchContacts', 'deleteContact']),
    onDelete(contact) {
      console.log("delete");
      console.log(JSON.stringify(contact));
      this.deleteContact(contact);
    },
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts();
  }
}
</script>

<style>
.contacts {
  text-align: start;
}
</style>