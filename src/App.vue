<template>
  <div id="app">
    <maincontent>
      <router-view/>
    </maincontent>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue'

export default {
  components: {
    'maincontent': MainContent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
</style>
