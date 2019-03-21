<template>
  <div class="signup">
     <img alt="DH logo" src="../assets/logodh.jpg" class="signup__dhlogo">
     <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
export default {
  name: 'SignUp',
  components: {
    SignUpForm
  }
};
</script>

<style scoped>
    .signup{
      text-align: center;
         &__dhlogo{
            margin-top: 5vh;
            height: 20vh;
            min-height: 150px;
         }

    }
</style>
