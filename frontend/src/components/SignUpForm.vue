<template>
  <div class="SignUpForm">
    <form @submit.prevent="signUp">
      <h2>Регистрация</h2>
      <label>Имя:</label><br>
      <input required v-model="username" type="text" placeholder="Иванов Иван Иванович"/><br><br>
      <label>E-mail:</label><br>
      <input required v-model="email" type="email" placeholder="ivanivanov@mail.ru"/><br><br>
      <label>Пароль:</label><br>
      <input required v-model="password" type="password"/><br><br>
      <hr>
      <button type="submit">Отправить</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signUp() {
      let data = {
        email: this.email,
        password: this.password
      };

      axios.post('http://localhost:3000/sign-up', data)
        .then(response => {
          alert(this.username + ', вы зарегистрировались!');
          console.log(response);
        })
        .catch(error => {
          alert('Что-то пошло не так!');
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

</style>
