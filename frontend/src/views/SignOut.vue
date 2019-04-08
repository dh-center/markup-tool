<template>
  <div class="sign-page">
    <img alt="DH logo" src="../assets/logodh.jpg" class="dhlogo">
    <form class="sign-out" @submit.prevent="signout">
      <button type="submit">Выйти</button>
    </form>
  </div>
</template>

<script>
  import { AUTH_LOGOUT } from '../store/actions/auth';
  export default {
    name: 'SignOut',
    methods: {
      signout: function () {
        this.$store.commit(AUTH_LOGOUT);
        this.$router.push('/about');
      }
    }
  };
</script>

<style scoped>
  @import url("../styles/sign.css");
</style>
