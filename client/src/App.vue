<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link :to="{ name: 'Home' }">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div v-if="!this.$store.state.user">
        <router-link :to="{ name: 'Register' }">
          <v-btn text>Register</v-btn>
        </router-link>

        <router-link :to="{ name: 'Login' }">
          <v-btn text>Login</v-btn>
        </router-link>
      </div>

      <div v-if="this.$store.state.user">
        <router-link :to="{ name: 'Dashboard' }">
          <v-btn text>Dashboard</v-btn>
          <v-btn text @click="logout">Log out</v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    async logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
