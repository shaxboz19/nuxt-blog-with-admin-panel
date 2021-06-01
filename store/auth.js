export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state, token) {
    state.token = null;
  },
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve) => {
        setTimeout(() => {
          resolve("mok-token");
        }, 2000);
      });
      dispatch("setToken", token);
      console.log(token);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  logout({ commit }) {
    commit("clearToken");
  },

  async createUser({ commit }, formData) {
    try {
      console.log("created", formData);
    } catch (e) {}
  },
};

export const getters = {
  isAuth: (state) => !!state.token,
};
