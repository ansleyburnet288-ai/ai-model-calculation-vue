import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {
      uid: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      userRole: '',
      metadata: {
        totalCost: 0
      }
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.uid = payload.uid;
      state.user.firstName = payload.firstName;
      state.user.lastName = payload.lastName;
      state.user.email = payload.email;
      state.user.phoneNumber = payload.phoneNumber;
      state.user.userRole = payload.userRole;
    },
    updateUser(state, payload) {
      state.user = { ...state.user, ...payload };
    },
    logoutUser(state) {
      state.user.uid = null;
      state.user.firstName = '';
      state.user.lastName = '';
      state.user.email = '';
      state.user.phoneNumber = '';
      state.user.userRole = '';
      state.user.metadata.totalCost = 0;
    },
    setTotalCost(state, payload) {
      state.user.metadata.totalCost = payload
    }
  },
  actions: {
    login({ commit }, payload) {
        setTimeout(() => {
          commit('setUser', {
            uid: payload.uid,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            userRole: payload.userRole
          });
        }, 500);
    },
    update({ commit }, payload) {
      commit('updateUser', payload);
    },
    logout({ commit }) {
        commit('logoutUser');
    },
    save_total_code({ commit }, payload) {
        commit('setTotalCost', payload)
    },
  }
});
