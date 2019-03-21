<template>
  <div class="SignUpForm">
    <form @submit.prevent="signUp">
      <h2>Регистрация</h2>
      <label>Имя:</label><br>
      <input required v-model="username" type="text" placeholder="Иванов Иван Иванович"/><br><br>
      <label>E-mail:</label><br>
      <input required v-model="mail" type="email" placeholder="ivanivanov@mail.ru"/><br><br>
      <label>Пароль:</label><br>
      <input required v-model="pass" type="password" /><br><br>
      <hr>
      <button type="submit">Отправить</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      mail: '',
      pass: ''
    };
  },
  methods: {
    signUp() {
      alert(this.username + ', вы зарегистрировались!');
      let xhr = new XMLHttpRequest();

      xhr.open('post', 'localhost:3000/sign-up', false);
      let body = 'password=' + this.pass + '&email =' + this.mail;

      xhr.send(body);
      if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        alert(xhr.responseText);
      }
    }
  }
};
</script>

<style scoped>

</style>
