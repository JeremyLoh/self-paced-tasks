<template>
  <div id="app">
    <b-navbar id="nav" variant="primary" type="dark" sticky>
      <b-navbar-brand href="#">Contacts</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
