<template>
  <button @click="logIn" v-if="!isAuth">Login</button>
  <button @click="logOut" v-if="isAuth">Logout</button>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$store.dispatch('logIn');
    },
    logOut() {
      this.$store.dispatch('logOut');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuth;
    },
  },
};
</script>