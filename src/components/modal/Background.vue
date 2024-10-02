<template>
  <transition name="fade" appear>
    <div class="background"></div>
  </transition>
</template>

<style lang="scss" scoped>
.fade.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  transition: opacity 0.5s ease;
  opacity: 0;
}

.background {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: rgba(12, 12, 14, 0.5);
}
</style>