<template>
  <div>
    <v-card width="400" class="mt-8 mx-auto">
      <v-card-title class="pb-0 justify-center">
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register" class="px-5">
          <v-text-field
            v-model="name"
            label="Name"
            prepend-icon="mdi-account-circle"
          />
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
        <v-btn class="ml-5 success">Register</v-btn>
        <v-btn class="ml-5 Info">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      status: null,
      showPassword: false
    };
  },
  methods: {
    async register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
