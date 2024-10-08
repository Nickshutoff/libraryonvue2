<template>
  <transition name="fade">
    <div v-if="isAnyModalOpen" class="background"></div>
  </transition>
</template>

<script>
export default {
  props: {
    isAnyModalOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.background {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(12, 12, 14, 0.5);
}
</style>