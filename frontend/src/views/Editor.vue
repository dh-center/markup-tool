<template>
  <div class="editor">
    <div class="editor__toolbar">
      <button @click="openDialog">Новая сущность</button>
      <add-entity-dialog v-show="showDialog" @close="closeDialog"></add-entity-dialog>
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
        <span v-for="(entity, index) in currentEntities"
              v-bind:class="['editor__content-entity','e'+entity.id]" v-bind:key="index">
              {{entity.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import AddEntityDialog from '../components/AddEntityDialog';
  import axios from 'axios';
  import uuid from 'uuid/v4';

  export default {
    name: 'Editor',
    data() {
      return {
        entityName: '',
        currentEntities: [],
        showDialog: false,
        text: {}
      };
    },
    created() {
      this.loadText();
    },
    methods: {
      openDialog() {
        this.showDialog = true;
      },

      closeDialog(entityName) {
        this.showDialog = false;
        const entityId = uuid();

        this.createNewEntity(entityId, entityName);
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
      createNewEntity(entityId, entityName) {
        this.currentEntities.push({
          id: entityId,
          name: entityName
        });
        /**
         * @const {String} - classname for selected block
         */
        const selectedClass = 'editor__content-selected';
        /**
         * @const {String} - classname for entity block
         */
        const entityClass = 'editor__content-entity';
        const selectedWordsList = Array.from(document.getElementsByClassName(selectedClass));

        for (const selectedWordElement of selectedWordsList) {
          selectedWordElement.classList.remove(selectedClass);
          selectedWordElement.classList.add(entityClass, 'e' + entityId);
        }
        const generatedColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

        document.styleSheets[0].insertRule('.e' + entityId + '{background-color:' + generatedColor + ';}');
      },
      async loadText() {
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
      AddEntityDialog
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

      &-entity {
        color: #fff;
        border: 1px solid #000;
        margin: 0 -1px;
      }
    }
  }

</style>
