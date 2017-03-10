<template>
  <div id="app">
    <top></top>
    <con-tent></con-tent>
  </div>
</template>

<script>
import top from './components/top'
import content from './components/content'

export default {
  name: 'app',
  components: {
    'top': top,
    'con-tent': content
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 12px;
  background: #e1e1e1;
}
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: #333;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
