<template>
  <div class="sign-out-page">
    <img alt="DH logo" src="../assets/logodh.jpg" class="sign-out-page__dhlogo">
    <form class="sign-out" @submit.prevent="signout">
      <button type="submit">Выйти</button>
    </form>
  </div>
</template>

<script>
  import { AUTH_LOGOUT } from '../../store/actions/auth';
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
  .sign-out-page {
    text-align: center;

    &__dhlogo {
      margin-top: 5vh;
      height: 20vh;
      min-height: 150px;
    }
  }
</style>
