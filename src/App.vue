<template lang='pug'>
  #app
    #nav
      router-link(to='/') Home
      | |
      router-link(to='/about') About
      p(class='bird2') test
      p(class='bird1') test
      p(class='grid') grid
    router-view.
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bird {
  color: red;
}
.bird1 {
  color: blue;
}
.bird2 {
  color: green;
}
.grid {
  display: grid;
}
</style>
