import counterMutations from '../counter/mutations.js';
import counterActions from '../counter/actions.js';
import counterGetters from '../counter/getters.js';

export default {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
