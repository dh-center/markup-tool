<template>
    <dialog-window @close="$emit('close')">
      <template #header>Добавить сущность</template>
    </dialog-window>
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
