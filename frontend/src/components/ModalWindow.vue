<template>
  <transition name="modal-window">
    <div class="modal-window__mask">
      <div class="modal-window__wrapper">
        <div class="modal-window__container">

          <div class="modal-window__header">
            <slot name="header">
              Добавить сущность
            </slot>
          </div>

          <div class="modal-window__body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-window__footer">
            <slot name="footer">
              default footer
              <button class="modal-window__default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalWindow'
  };
</script>

<style>
  .modal-window {
    &__mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    }

    &__wrapper {
      display: table-cell;
      vertical-align: middle;
    }

    &__container {
      width: 300px;
      margin: 0 auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }

    &__header h3 {
      margin-top: 0;
      color: #42b983;
    }

    &__body {
      margin: 20px 0;
    }

    &__default-button {
      float: right;
    }

    &-enter {
      opacity: 0;
    }

    &-leave-active {
      opacity: 0;
    }

    &-enter &__container,
    &-leave-active &__container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
</style>
