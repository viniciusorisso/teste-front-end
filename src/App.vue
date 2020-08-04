<template>
  <div id="app">
      <router-link :to="{name : 'login' }"></router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
$bgBody : #EFF0F3;
body{
  margin: 0;
  background-color:$bgBody;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
