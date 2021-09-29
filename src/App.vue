<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>Phone Book</h1>
    </div>
    <div>
      <MainPage />
    </div>
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
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
  h1 {
    font-family: "Garamond";
  }
}
.button {
  padding: 0.6rem;
  border-radius: 5px;
  cursor: pointer;
}
.filled-button {
  color: #fff;
  background: #01a8b6;
  border: none;
  font-weight: bold;
  &:hover {
    background: #1dd1e2;
  }
}
.border-button {
  color: #01a8b6;
  background: #fff;
  border: 1px solid #01a8b6;
  font-weight: bold;
  &:hover {
    background: #1dd1e222;
  }
}
.danger-button {
  color: #fff;
  background: #f53251;
  border: none;
  font-weight: bold;
  &:hover {
    background: #ff5c77;
  }
}
</style>
