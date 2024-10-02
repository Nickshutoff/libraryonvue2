<template>
  <div class="carousel">
    <CarouselGallery
      @move-to-left="moveToLeft"
      @move-to-right="moveToRight"
      :current-index="currentIndex"
    />
    <CarouselControll @btn-active="btnActive" :current-index="currentIndex" />
  </div>
</template>

<script>
import CarouselGallery from "./CarouselGallery.vue";
import CarouselControll from "./CarouselControll.vue";

export default {
  components: {
    CarouselGallery,
    CarouselControll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    btnActive(index) {
      this.currentIndex = index;
    },
    moveToLeft() {
      this.currentIndex--;
    },
    moveToRight() {
      this.currentIndex++;
    },
    resetCarousel() {
      this.currentIndex = 0;
    },
  },
  mounted() {
    window.addEventListener("resize", this.resetCarousel);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resetCarousel);
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: 20px;
}
</style>
