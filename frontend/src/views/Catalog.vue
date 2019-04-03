<template>
  <div class="catalog">
    <h1 class="title">Каталог текстов</h1>
    <router-link tag="span" :to="{path: '/texts/'+text._id+'/markup'}" class="catalog__text_item"
                 v-for="(text,index) in texts" v-bind:key="index" active-class="active">{{text.title}}
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Catalog',
    data() {
      return {
        texts: []
      };
    },
    created() {
      this.getTexts();
    },
    methods: {
      async getTexts() {
        try {
          const response = await axios.get('http://localhost:3000/texts');

          if (response.status === 200) this.texts = response.data.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
</script>

<style>
  .catalog {

    &__text_item {
      cursor: pointer;
      text-decoration: underline;
      margin-right: 10px;
    }
  }
</style>
