<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>Phone Book</h1>
    </div>

    <ContactList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ContactList from './views/ContactList.vue'

export default {
  name: 'App',
  components: {
    ContactList
  }
}
</script>

<style lang="scss">
$primaryColor: #77d9e2;
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px #00000055;
  padding: 8px 15px;
  img {
    height: 80px;
    width: 80px;
  }
}
</style>
