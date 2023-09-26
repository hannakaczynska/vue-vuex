import { createStore } from 'vuex';
import rootMutations from '../root/mutations.js';
import rootActions from '../root/actions.js';
import rootGetters from '../root/getters.js';

import counterModule from '../counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  //mutations must be synchronous ! you shouldn't use setTimeout
  mutations: rootMutations,
  // actions can run asynchronous functions
  actions: rootActions,
  getters: rootGetters,
});

export default store;
