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
      <div class="editor__content" v-on:click="selectWord($event)" id="editor__content">
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
      selectWord(event) {
        const pos = document.caretRangeFromPoint(event.clientX, event.clientY);
        const textNode = pos.startContainer.data;
        const clickedChar = textNode[pos.startOffset];

        console.log(clickedChar);
        if (clickedChar === ' ') {
          pos.setEnd(pos.endContainer, pos.endOffset + 1);
          const highlightDiv = document.createElement('span');

          highlightDiv.className = 'editor__content-selected';
          pos.surroundContents(highlightDiv);
        } else if (typeof clickedChar != 'undefined') {
          let start = pos.startOffset;

          while (start >= 1 && /\S/.test(textNode.charAt(start - 1))) {
            --start;
          }
          pos.setStart(pos.startContainer, start);
          let end = pos.endOffset;
          const len = textNode.length;

          while (end < len && /\S/.test(textNode.charAt(end))) {
            ++end;
          }
          pos.setEnd(pos.endContainer, end);
          const highlightDiv = document.createElement('span');

          highlightDiv.className = 'editor__content-selected';
          pos.surroundContents(highlightDiv);
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
      user-select: none;

      &-selected {
        color: #fff;
        background-color: red;
        border: 1px solid #000;
      }
    }
  }

</style>
