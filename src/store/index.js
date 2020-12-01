import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {
    SET_CART(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
  },
});
