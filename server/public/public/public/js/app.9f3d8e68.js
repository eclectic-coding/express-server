"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

(function (t) {
  function e(e) {
    for (var n, s, i = e[0], c = e[1], l = e[2], d = 0, p = []; d < i.length; d++) {
      s = i[d], Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]), r[s] = 0;
    }

    for (n in c) {
      Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    }

    u && u(e);

    while (p.length) {
      p.shift()();
    }

    return o.push.apply(o, l || []), a();
  }

  function a() {
    for (var t, e = 0; e < o.length; e++) {
      for (var a = o[e], n = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== r[c] && (n = !1);
      }

      n && (o.splice(e--, 1), t = s(s.s = a[0]));
    }

    return t;
  }

  var n = {},
      r = {
    app: 0
  },
      o = [];

  function s(e) {
    if (n[e]) return n[e].exports;
    var a = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
  }

  s.m = t, s.c = n, s.d = function (t, e, a) {
    s.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: a
    });
  }, s.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" === _typeof(t) && t && t.__esModule) return t;
    var a = Object.create(null);
    if (s.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) {
      s.d(a, n, function (e) {
        return t[e];
      }.bind(null, n));
    }
    return a;
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return s.d(e, "a", e), e;
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, s.p = "/";
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
      c = i.push.bind(i);
  i.push = e, i = i.slice();

  for (var l = 0; l < i.length; l++) {
    e(i[l]);
  }

  var u = c;
  o.push([0, "chunk-vendors"]), a();
})({
  0: function _(t, e, a) {
    t.exports = a("56d7");
  },
  "56d7": function d7(t, e, a) {
    "use strict";

    a.r(e);
    a("d3b7"), a("e260"), a("e6cf"), a("cca6"), a("a79d");

    var n = a("2b0e"),
        r = function r() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-app", [a("v-app-bar", {
        attrs: {
          app: "",
          color: "primary",
          dark: ""
        }
      }, [a("div", {
        staticClass: "d-flex align-center"
      }, [a("router-link", {
        attrs: {
          to: {
            name: "Home"
          }
        }
      }, [a("v-img", {
        staticClass: "shrink mr-2",
        attrs: {
          alt: "Vuetify Logo",
          contain: "",
          src: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
          transition: "scale-transition",
          width: "40"
        }
      })], 1)], 1), a("v-spacer"), this.$store.state.user ? t._e() : a("div", [a("router-link", {
        attrs: {
          to: {
            name: "Register"
          }
        }
      }, [a("v-btn", {
        attrs: {
          text: ""
        }
      }, [t._v("Register")])], 1), a("router-link", {
        attrs: {
          to: {
            name: "Login"
          }
        }
      }, [a("v-btn", {
        attrs: {
          text: ""
        }
      }, [t._v("Login")])], 1)], 1), this.$store.state.user ? a("div", [a("router-link", {
        attrs: {
          to: {
            name: "Dashboard"
          }
        }
      }, [a("v-btn", {
        attrs: {
          text: ""
        }
      }, [t._v("Dashboard")]), a("v-btn", {
        attrs: {
          text: ""
        },
        on: {
          click: t.logout
        }
      }, [t._v("Log out")])], 1)], 1) : t._e()], 1), a("v-main", [a("router-view")], 1)], 1);
    },
        o = [],
        s = (a("96cf"), a("1da1")),
        i = {
      name: "App",
      data: function data() {
        return {};
      },
      methods: {
        logout: function logout() {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    t.$store.dispatch("logout").then(function () {
                      t.$router.push({
                        name: "Login"
                      });
                    })["catch"](function (t) {
                      console.log(t);
                    });

                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }))();
        }
      }
    },
        c = i,
        l = a("2877"),
        u = a("6544"),
        d = a.n(u),
        p = a("7496"),
        m = a("40dc"),
        f = a("8336"),
        v = a("adda"),
        h = a("f6c4"),
        g = a("2fa4"),
        b = Object(l["a"])(c, r, o, !1, null, null, null),
        w = b.exports;

    d()(b, {
      VApp: p["a"],
      VAppBar: m["a"],
      VBtn: f["a"],
      VImg: v["a"],
      VMain: h["a"],
      VSpacer: g["a"]
    });
    a("45fc");

    var x = a("8c4f"),
        _ = function _() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-container", {
        staticClass: "mt-8"
      }, [a("h1", {
        staticClass: "text-center"
      }, [t._v("Home page")])]);
    },
        y = [],
        C = {
      name: "Home"
    },
        V = C,
        k = a("a523"),
        O = Object(l["a"])(V, _, y, !1, null, null, null),
        j = O.exports;

    d()(O, {
      VContainer: k["a"]
    });

    var P = function P() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", [a("v-card", {
        staticClass: "mt-8 mx-auto",
        attrs: {
          width: "400"
        }
      }, [a("v-card-title", {
        staticClass: "pb-0 justify-center"
      }, [a("h1", [t._v("Register")])]), a("v-card-text", [a("v-form", {
        staticClass: "px-5",
        on: {
          submit: function submit(e) {
            return e.preventDefault(), t.register(e);
          }
        }
      }, [a("v-text-field", {
        attrs: {
          label: "Name",
          "prepend-icon": "mdi-account-circle"
        },
        model: {
          value: t.name,
          callback: function callback(e) {
            t.name = e;
          },
          expression: "name"
        }
      }), a("v-text-field", {
        attrs: {
          label: "Email",
          "prepend-icon": "mdi-mail"
        },
        model: {
          value: t.email,
          callback: function callback(e) {
            t.email = e;
          },
          expression: "email"
        }
      }), a("v-text-field", {
        attrs: {
          type: t.showPassword ? "text" : "password",
          label: "Password",
          "prepend-icon": "mdi-lock",
          "append-icon": t.showPassword ? "mdi-eye" : "mdi-eye-off"
        },
        on: {
          "click:append": function clickAppend(e) {
            t.showPassword = !t.showPassword;
          }
        },
        model: {
          value: t.password,
          callback: function callback(e) {
            t.password = e;
          },
          expression: "password"
        }
      })], 1)], 1), a("v-divider"), a("v-card-actions", {
        staticClass: "my-1"
      }, [a("v-btn", {
        staticClass: "ml-5 success"
      }, [t._v("Register")]), a("v-btn", {
        staticClass: "ml-5 Info"
      }, [t._v("Cancel")])], 1)], 1)], 1);
    },
        S = [],
        T = (a("b0c0"), {
      data: function data() {
        return {
          name: "",
          email: "",
          password: "",
          status: null,
          showPassword: !1
        };
      },
      methods: {
        register: function register() {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    t.$store.dispatch("register", {
                      name: t.name,
                      email: t.email,
                      password: t.password
                    }).then(function () {
                      t.$router.push({
                        name: "Home"
                      });
                    })["catch"](function (t) {
                      console.log(t);
                    });

                  case 1:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }))();
        }
      }
    }),
        A = T,
        $ = a("b0af"),
        E = a("99d9"),
        R = a("ce7e"),
        D = a("4bd4"),
        U = a("8654"),
        L = Object(l["a"])(A, P, S, !1, null, "da3f7036", null),
        I = L.exports;

    d()(L, {
      VBtn: f["a"],
      VCard: $["a"],
      VCardActions: E["a"],
      VCardText: E["b"],
      VCardTitle: E["c"],
      VDivider: R["a"],
      VForm: D["a"],
      VTextField: U["a"]
    });

    var M = function M() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", [a("v-card", {
        staticClass: "mt-8 mx-auto",
        attrs: {
          width: "400"
        }
      }, [a("v-card-title", {
        staticClass: "pb-0 justify-center"
      }, [a("h1", [t._v("Login")])]), a("v-card-text", [a("v-form", {
        staticClass: "px-5",
        on: {
          submit: function submit(e) {
            return e.preventDefault(), t.login(e);
          }
        }
      }, [a("v-text-field", {
        attrs: {
          label: "Email",
          "prepend-icon": "mdi-mail"
        },
        model: {
          value: t.email,
          callback: function callback(e) {
            t.email = e;
          },
          expression: "email"
        }
      }), a("v-text-field", {
        attrs: {
          type: t.showPassword ? "text" : "password",
          label: "Password",
          "prepend-icon": "mdi-lock",
          "append-icon": t.showPassword ? "mdi-eye" : "mdi-eye-off"
        },
        on: {
          "click:append": function clickAppend(e) {
            t.showPassword = !t.showPassword;
          }
        },
        model: {
          value: t.password,
          callback: function callback(e) {
            t.password = e;
          },
          expression: "password"
        }
      })], 1)], 1), a("v-divider"), a("v-card-actions", {
        staticClass: "my-1"
      }, [a("v-btn", {
        staticClass: "ml-5 success",
        attrs: {
          type: "submit"
        },
        on: {
          click: t.login
        }
      }, [t._v("Login")]), a("v-btn", {
        staticClass: "ml-5 Info"
      }, [t._v("Cancel")])], 1)], 1)], 1);
    },
        B = [],
        H = {
      data: function data() {
        return {
          email: "",
          password: "",
          status: null,
          showPassword: !1
        };
      },
      methods: {
        login: function login() {
          var t = this;
          this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          }).then(function () {
            t.$router.push({
              name: "Dashboard"
            });
          })["catch"](function (t) {
            console.log(t);
          });
        }
      }
    },
        F = H,
        J = Object(l["a"])(F, M, B, !1, null, "5ac14c34", null),
        N = J.exports;

    d()(J, {
      VBtn: f["a"],
      VCard: $["a"],
      VCardActions: E["a"],
      VCardText: E["b"],
      VCardTitle: E["c"],
      VDivider: R["a"],
      VForm: D["a"],
      VTextField: U["a"]
    });

    var q = function q() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-container", [a("h1", {
        staticClass: "text-center"
      }, [t._v("Dashboard")])]);
    },
        G = [],
        z = {},
        K = z,
        Q = Object(l["a"])(K, q, G, !1, null, null, null),
        W = Q.exports;

    d()(Q, {
      VContainer: k["a"]
    });
    var X = a("2f62"),
        Y = a("bc3a"),
        Z = a.n(Y);
    n["a"].use(X["a"]);
    var tt = new X["a"].Store({
      state: {
        user: null,
        authenticatedUser: !1
      },
      mutations: {
        SET_USER_DATA: function SET_USER_DATA(t, e) {
          localStorage.setItem("user", JSON.stringify(e)), Z.a.defaults.headers.common["Authorization"] = "Bearer ".concat(e.token), t.user = e, t.authenticatedUser = !0, console.log("Mutations:", this.state.user), console.log(t.authenticatedUser);
        },
        LOG_OUT: function LOG_OUT(t) {
          localStorage.removeItem("user"), t.user = null, t.authenticatedUser = !1;
        }
      },
      actions: {
        register: function register(t, e) {
          var a = t.commit;
          return Z.a.post("http://localhost:5000/signup", e).then(function (t) {
            a("SET_USER_DATA", t);
          });
        },
        login: function login(t, e) {
          var a = this,
              n = t.commit;
          return Z.a.post("http://localhost:5000/login", e).then(function (t) {
            n("SET_USER_DATA", t), console.log("Actions:", a.state.user);
          });
        },
        logout: function logout(t) {
          var e = t.commit;
          e("LOG_OUT");
        }
      }
    });
    n["a"].use(x["a"]);
    var et = [{
      path: "/",
      name: "Home",
      component: j
    }, {
      path: "/signup",
      name: "Register",
      component: I
    }, {
      path: "/login",
      name: "Login",
      component: N
    }, {
      path: "/api/user/dashboard",
      name: "Dashboard",
      component: W,
      meta: {
        requiresAuth: !0
      }
    }],
        at = new x["a"]({
      mode: "history",
      base: "/",
      routes: et
    });
    at.beforeEach(function (t, e, a) {
      t.matched.some(function (t) {
        return t.meta.requiresAuth;
      }) && !1 === tt.state.authenticatedUser ? (console.log("Router:", tt.state.authenticatedUser), a("/login")) : a();
    });
    var nt = at,
        rt = a("f309");
    n["a"].use(rt["a"]);
    var ot = new rt["a"]({});
    n["a"].config.productionTip = !1, new n["a"]({
      router: nt,
      store: tt,
      created: function created() {
        var t = this,
            e = localStorage.getItem("user");

        if (e) {
          var a = JSON.parse(e);
          this.$store.commit("SET_USER_DATA", a);
        }

        Z.a.interceptors.response.use(function (t) {
          return t;
        }, function (e) {
          return console.log(e.response), 401 === e.response.status && (t.$router.push("/"), t.$store.dispatch("logout")), Promise.reject(e);
        });
      },
      vuetify: ot,
      render: function render(t) {
        return t(w);
      }
    }).$mount("#app");
  }
});