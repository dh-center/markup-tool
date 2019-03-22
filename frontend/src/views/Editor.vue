<template>
  <div class="editor">
    <div class="editor__toolbar">
      <button @click="openModal">Новая сущность</button>
      <div class="modal" v-if="modalOpened">
        <div @click="closeModal"  class="modal-background"> </div>
        <div class="modal-content">Hello!</div>
      </div>
      <button>Продолжить сущность</button>
      <button>Нулевая анафора</button>
      <button>Убрать выделение</button>
    </div>

    <div class="editor__column-layout">
      <div class="editor__content"><br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet autem blanditiis error est fuga numquam porro
        quo repudiandae sunt! Impedit ipsam iure quaerat ut. Asperiores atque, beatae enim explicabo facilis inventore
        ipsam nemo nisi officia quibusdam quis quo unde vel. Dolorem error ex harum hic modi molestiae neque
        perferendis,
        possimus quibusdam. At consequatur cum fuga quos repellendus suscipit voluptatum! Deleniti nam repellendus
        tempora. Animi error molestias provident sapiente similique totam veniam vitae, voluptatum! Ab, aliquam
        architecto
        autem consequuntur corporis cum debitis eligendi fugiat id libero magni nulla odit possimus quas quod repellat,
        sapiente similique. Ex id mollitia provident suscipit.
      </div>

      <div class="editor__entities-panel">
        <h1>Панель сущностей</h1>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        modalOpened: false
      }
    },
    methods: {
      OpenModal () {
        this.OpenModal = true;
      },
      closeModal(){
        this.OpenModal = false;
      }
    }
  }
</script>

<style>
  .editor {

    &__column-layout {
      display: flex;
    }

    &__entities-panel {
      border-left: 1px solid black;
      flex: 25%;
    }

    &__content {
      flex: 75%;
    }
  }

  .modal, .modal-background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vw;
    z-index: 1000;
  }
  .modal-background {
    background-color: rgba(10,10,10,0.8);
    z-index: 40;

  }

  .modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content{
    background-color: white;
    z-index: 50;
    padding: 2em;
  }
</style>
