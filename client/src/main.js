import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuelidate,
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit("SET_USER_DATA", userData);
    }
    //
    axios.interceptors.response.use(
      response => response,
      error => {
        console.log(error.response);
        if (error.response.status === 401) {
          this.$router.push("/");
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");
