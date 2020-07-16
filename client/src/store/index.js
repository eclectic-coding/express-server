import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    authenticatedUser: false
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
      state.user = userData;
      state.authenticatedUser = true;
      console.log("Mutations:", this.state.user);
      console.log(state.authenticatedUser);
    },
    LOG_OUT(state) {
      localStorage.removeItem("user");
      state.user = null;
      state.authenticatedUser = false;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("http://localhost:5000/signup", credentials)
        .then(data => {
          commit("SET_USER_DATA", data);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("http://localhost:5000/login", credentials)
        .then(data => {
          commit("SET_USER_DATA", data);
          console.log("Actions:", this.state.user);
        });
    },
    logout({ commit }) {
      commit("LOG_OUT");
    }
  }
});
