<template>
  <div id="app">
    <header id="header">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between"
      >
        <a class="navbar-brand" href="#">
          <span class="logo">
             <img alt="Vue logo" class="logo" src="./assets/logo.png" />
             <img alt="Vue logo" class="logo" src="./assets/logo.png" />
          </span>
          VueRM
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/phoneBook" class="nav-link">Phone book</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
        </ul>

        <div class="stub">
          <router-link :to="{ name: 'login' }" class="btn btn-success mr-2"
            >Sign in
          </router-link>
          <button
            v-if="isAdmin"
            @click.prevent="Logout"
            type="submit"
            class="btn btn-dark"
          >
            Exit
          </button>
        </div>
      </nav>
    </header>


    <main id="main">
      <transition-page>
        <router-view />
      </transition-page>
    </main>
  </div>
</template>

<script>
import { logout } from "@/auth.js";

export default {
  components: {
    TransitionPage: () => import("@/components/TransitionPage.vue"),
  },
  data: function() {
    return {
      isAdmin: false
    };
  },
  created() {
    window.state.$on("Login", () => {
      this.checkLogin();
    });
    window.state.$on("Logout", () => {
      this.checkLogin();
    });
    this.checkLogin();
  },
  methods: {
    checkLogin: function() {
      this.isAdmin = !!localStorage.getItem("isAdmin");
    },
    Logout: function() {
      logout();
    }
  }
};
</script>

<style lang="scss">
.logo {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.5;
    transform: translate3d(10%, 10%, 0);
    filter: blur(1px);
  }
}

.stub,
.navbar-brand {
  display: flex;
  justify-content: flex-end;
  width: 200px;
}

.page {
  padding-top: 60px;
}

#header {
  .nav-item {
    padding: 0 1.5rem;
  }
  .navbar-light .navbar-nav .nav-link {
    &:hover,
    &:focus {
      color: #42b983;
    }
  }
  .navbar-light .navbar-nav .nav-link.router-link-exact-active {
    &:hover,
    &:focus {
      color: #42b983;
    }
  }
}

#main {
  position: relative;
}

</style>
