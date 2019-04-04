<template>
  <div class="sign-in-page">
    <img alt="DH logo" src="../assets/logodh.jpg" class="sign-in-page__dhlogo">
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1><br>
      <label>User name</label><br>
      <input required v-model="email" type="email" placeholder=""/><br>
      <label>Password</label><br>
      <input required v-model="password" type="password" placeholder="Password"/>
      <br>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
  .sign-in-page {
    text-align: center;

    &__dhlogo {
      margin-top: 5vh;
      height: 20vh;
      min-height: 150px;
    }
  }
</style>

<script>
  import { AUTH_REQUEST } from '../../store/actions/auth';

  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login: function () {
        const { email, password } = this;

        this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
          this.$router.push('/about');
        });
      }
    }
  };
</script>
