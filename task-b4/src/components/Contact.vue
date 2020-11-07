<template>
  <div>
    <h3>Contacts</h3>
    <b-container class="contacts">
      <b-row v-for="contact in allContacts" :key="contact.contact_id" class="contact" style="background: red; margin: 1em;">
        <h1>---------------</h1>
        <div>{{ contact.name }}</div>
        <div>{{ contact.email }}</div>
        <div>{{ contact.gender }}</div>
        <div>{{ contact.phone }}</div>
        <div>{{ contact.create_date }}</div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Map getters from Vuex
import { mapGetters, mapActions } from 'vuex';
// mapGetters(['allContacts']) allows us to use getter defined
export default {
  name: 'Contact',
  methods: {
    ...mapActions(['fetchContacts']),
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts();
  }
}
</script>

<style>

</style>