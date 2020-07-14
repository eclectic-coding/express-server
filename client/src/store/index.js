import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
      state.user = userData;
    }
  },
  actions: {
    async register({ commit }, credentials) {
      await axios
        .post("http://localhost:5000/signup", credentials)
        .then(data => {
          commit("SET_USER_DATA", data);
          console.log(data);
        });
    },
    async login({ commit }, credentials) {
      await axios
        .post("http://localhost:5000/login", credentials)
        .then(data => {
          commit("SET_USER_DATA", data);
          console.log(data);
        });
    }
  },
  modules: {}
});
