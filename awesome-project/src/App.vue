<template>
  <div id="app">
    <div id="nav" class="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img alt="Vue logo" class="logo" src="./assets/logo.png" />
          Awesome Project
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
        </ul>

        <div class="stub"></div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
 .logo {
   width: 30px;
   height: 30px;
 }
  .stub, .navbar-brand {
    width: 200px;
  }
  .page {
    padding-top: 60px;
  }
  .navigation {
    .nav-item {
      padding: 0 1.5rem;
    }
    .navbar-light .navbar-nav .nav-link {
      &:hover, &:focus {
        color: #42b983;
      }
    }
    .navbar-light .navbar-nav .nav-link.router-link-exact-active {
      &:hover, &:focus {
        color: #42b983;
      }
    }
  }
</style>
