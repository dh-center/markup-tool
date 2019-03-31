<template>
  <transition name="add-entity-dialog">
    <dialog-window @close="$emit('close')">
      <template #header>Добавить сущность</template>
      <template #body>
        <input type="text" v-model.number="entityId" placeholder="ID сущности">
        <input type="text" v-model="entityName" placeholder="Имя сущности">
      </template>
    </dialog-window>
  </transition>
</template>

<script>
  import DialogWindow from '../components/DialogWindow';

  export default {
    name: 'AddEntityDialog',
    components: {
      DialogWindow
    }
  };
</script>

<style>

</style>
