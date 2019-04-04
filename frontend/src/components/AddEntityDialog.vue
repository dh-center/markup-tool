<template>
  <transition name="add-entity-dialog">
    <dialog-window @close="$emit('close')">
      <template #header>Добавить сущность</template>
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
