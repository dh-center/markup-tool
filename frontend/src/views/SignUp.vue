<template>
  <div class="sign-up-page">
    <img alt="DH logo" src="../assets/logodh.jpg" class="sign-up-page__dhlogo">
    <div>
      <form @submit.prevent="signUp">
        <h2>Регистрация</h2>
        <label for="email">E-mail:</label><br>
        <input required v-model="email" id="email" type="email" placeholder="ivanivanov@mail.ru"/><br><br>
        <label for="password">Пароль:</label><br>
        <input required v-model="password" id="password" type="password"/><br><br>
        <hr>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async signUp() {
        try {
          const data = {
            email: this.email,
            password: this.password
          };
          const response = await axios.post('/sign-up', data);

          alert(response.data);
          if (response.data.error) {
            throw response.data.error;
          } else {
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
</script>

<style>
  .sign-up-page {
    text-align: center;

    &__dhlogo {
      margin-top: 5vh;
      height: 20vh;
      min-height: 150px;
    }
  }
</style>
