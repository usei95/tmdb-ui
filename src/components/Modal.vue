<template>
  <div class="modal" v-if="visible">
    <div class="modal__inner">
      <div class="modal__body">
        <slot />
      </div>
    </div>
    <div class="modal__backdrop"></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keyDownHandler);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyDownHandler);
  },
  methods: {
    keyDownHandler({ keyCode }) {
      if (keyCode === 27 && this.visible) this.hideDialog();
    },
    hideDialog() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss">
.modal {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99999;
  &__inner {
    background: rgba($dark, 0.4);
    display: flex;
    overflow-y: auto;
    height: 100%;
    width: 100%;
  }
  &__body {
    margin: auto;
    overflow: hidden;
    border-radius: 3px;
    background: #fff;
    z-index: 1;
    position: relative;
    box-shadow: 0px 8px 13px 7px rgba(0, 0, 0, 0.2);
    min-width: 301px;
    padding: 5px;
  }
}
</style>
