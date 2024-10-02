<template>
  <div class="hamburger" @click="toggleTabletNav">
    <span
      class="hamburger-line"
      :class="{ 'active-hamburger-line-1': isTabletNavOpen }"
    ></span>
    <span
      class="hamburger-line"
      :class="{ 'active-hamburger-line-2': isTabletNavOpen }"
    ></span>
    <span
      class="hamburger-line"
      :class="{ 'active-hamburger-line-3': isTabletNavOpen }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    isTabletNavOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleTabletNav() {
      this.$emit('toggle-tablet-nav')
    }
  }
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: none;

  @include tablet {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 45px;
    z-index: 16;
  }

  &:hover {
    cursor: pointer;
  }

  .hamburger-line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $white;
    transition: all ease-in-out 0.3s;
  }

  .active-hamburger-line-1 {
    opacity: 0;
  }

  .active-hamburger-line-2 {
    transform: rotateZ(46deg);
  }

  .active-hamburger-line-3 {
    transform: translateY(-12px) rotateZ(-46deg);
  }
}
</style>