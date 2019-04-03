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
      <div class="editor__content" @dblclick="selectWord">
        {{text.content}}
      </div>

      <div class="editor__entities-panel">
        <h1>Панель сущностей</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import ModalWindow from '../components/ModalWindow';
  import axios from 'axios';

  export default {
    name: 'Editor',
    data() {
      return {
        showModal: false,
        text: {}
      };
    },
    created() {
      this.getText();
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
        const selectedText = selection.toString();
        const selectedRange = selection.getRangeAt(0);

        window.getSelection().removeAllRanges();

        if (selectedText.length > 1 || selectedText === ' ') { /* do not select punctuation marks */
          const highlightElementType = 'span';
          const highlightElement = document.createElement(highlightElementType);

          /**
          * @const {String} - classname for selected block
          */
          const selectedClass = 'editor__content-selected';

          highlightElement.className = selectedClass;
          const selectedParentElement = selectedRange.startContainer.parentElement;

          if (selectedParentElement.classList.contains(selectedClass)) { /* check if user has already selected this text. */
            selectedParentElement.outerHTML = selectedParentElement.innerHTML;
          } else {
            selectedRange.surroundContents(highlightElement);
          }
        }
      },
      async getText() {
        try {
          const textId = this.$route.params.textId;
          const response = await axios.get('/texts/' + textId);

          if (response.status === 200 && response.data.data) this.text = response.data.data;
        } catch (error) {
          console.error(error);
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
