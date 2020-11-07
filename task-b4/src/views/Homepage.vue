<template>
  <b-container>
    <AddContact class="mt-3"/>
    <Contact />
  </b-container>
</template>

<script>
import Contact from '../components/Contact';
import AddContact from '../components/AddContact';

export default {
  name: 'Homepage',
  components: {
    Contact,
    AddContact,
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
