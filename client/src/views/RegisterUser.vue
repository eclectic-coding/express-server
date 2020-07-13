<template>
  <div class="page">
    <h1>This is an Register page</h1>
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email"> Email: </label>
      <input v-model="email" type="text" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="text" name="password" value />

      <button type="submit" name="button">
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      status: null
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
        .then()
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
