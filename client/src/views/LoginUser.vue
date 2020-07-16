<template>
  <div>
    <v-card width="400" class="mt-8 mx-auto">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login" class="px-5">
          <v-text-field v-model="email" label="Email" prepend-icon="mdi-mail" />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="my-1">
        <v-btn @click="login" type="submit" class="ml-5 success">Login</v-btn>
        <v-btn class="ml-5 Info">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      status: null,
      showPassword: false
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
