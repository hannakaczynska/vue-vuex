<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
    <favourite-value></favourite-value>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth> 
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';


export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue, UserAuth
  },
  methods: {
    addOne() {
      //two ways:
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
    computed: {
    isAuth() {
      return this.$store.getters.userIsAuth;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
