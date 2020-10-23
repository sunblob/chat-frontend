<template>
  <div id="app">
    <!-- <app-bar /> -->
    <router-view />
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  components: {
    "app-bar": AppBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ebedef;
}

html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
}

button:focus {
  all: unset;
}

button,
select {
  text-transform: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>
