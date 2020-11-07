<template>
  <b-container>
    <h1>Homepage</h1>
    <b-button id="addContactBtn" @click="showAddForm">Add Contact</b-button>
    <Contact />
  </b-container>
</template>

<script>
import Contact from '../components/Contact';

export default {
  name: 'Homepage',
  components: {
    Contact,
  },
  methods: {
    showAddForm() {
      this.$refs['add-form'].show();
    },
  },
}
</script>

<style scoped>

</style>
