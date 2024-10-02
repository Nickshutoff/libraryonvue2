<template>
  <div class="carousel-controll">
    <div
      v-for="(button, index) in buttons"
      :key="index"
      :class="[button.class, { active: index === currentIndex }]"
      @click="btnActive(index)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { class: "carousel-btn" },
        { class: "carousel-btn" },
        { class: "carousel-btn" },
        { class: "carousel-btn tablet" },
        { class: "carousel-btn tablet" },
      ],
    };
  },
  methods: {
    btnActive(index) {
      this.$emit("btn-active", index);
    },
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-controll {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
.carousel-btn {
  background-color: $black;
  border: none;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &.active,
  &:hover {
    background-color: $sand;
  }

  &.tablet {
    display: none;

    @include tablet {
      display: block;
    }
  }
}
</style>