<template>
  <div id="app">
      <div id="nav">
        <nav>
          <div class="nav-wrapper blue darken-1">
            <a href="#" class="brand-logo center">Produtos</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li class="darken-4">
                <router-link v-if="authenticated" to="/login" @click.native="logout()" replace>
                    Logout
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <notifications group="foo" />
      </div>
      <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>

<style>
</style>