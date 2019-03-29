<template>
  <div class="editor">
    <div class="editor__toolbar">
      <button @click="openModal">Новая сущность</button>
      <modal-window v-show="showModal" @close="closeModal">
        <template #header>Добавить сущность</template>
      </modal-window>
      <button>Продолжить сущность</button>
      <button>Нулевая анафора</button>
      <button>Убрать выделение</button>
    </div>

    <div class="editor__column-layout">
      <div class="editor__content" v-on:dblclick="selectWord">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
        amet autem blanditiis error est fuga numquam porro
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
  import ModalWindow from '../components/ModalWindow';

  export default {
    name: 'Editor',
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      selectWord() {
        const selection = window.getSelection();
        const text = selection.toString();
        const range = selection.getRangeAt(0);

        window.getSelection().removeAllRanges();

        if (text.length > 1 || text === ' ') {
          const highlightSpan = document.createElement('span');

          highlightSpan.className = 'editor__content-selected';
          if (range.startContainer.parentElement.classList.contains('editor__content-selected')) {
            range.startContainer.parentElement.outerHTML = range.startContainer.parentElement.outerHTML.replace(/<[^>]*>/g, '');
          } else {
            range.surroundContents(highlightSpan);
          }
        }
      }
    },
    components: {
      ModalWindow
    }
  };
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
      cursor: pointer;

      &-selected {
        color: #fff;
        background-color: red;
        border: 1px solid #000;
        margin: 0 -1px;
      }
    }
  }

</style>
