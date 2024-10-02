<template>
  <div class="carousel-wrapper">
    <div class="tablet-btn" @click="moveToLeft">
      <img :src="tabletBtns[0].src" :alt="tabletBtns[0].alt" />
    </div>
    <transition-group class="carousel-content" tag="div">
      <div
        class="carousel-gallery"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ transform: `translateX(-${currentIndex * 475}px)` }"
      >
        <img class="carousel-slide" :src="slide.src" :alt="slide.alt" />
      </div>
    </transition-group>
    <div class="tablet-btn" @click="moveToRight">
      <img :src="tabletBtns[1].src" :alt="tabletBtns[1].alt" />
    </div>
  </div>
</template>

<script>
import c1 from "@/assets/img/carousel/c1.png";
import c2 from "@/assets/img/carousel/c2.png";
import c3 from "@/assets/img/carousel/c3.png";
import c4 from "@/assets/img/carousel/c4.png";
import c5 from "@/assets/img/carousel/c5.png";
import leftbtn from "@/assets/img/icons/arrow-left.png";
import rightbtn from "@/assets/img/icons/arrow-right.png";

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          src: c1,
          alt: "woman",
        },
        {
          id: 2,
          src: c2,
          alt: "statues",
        },
        {
          id: 3,
          src: c3,
          alt: "library",
        },
        {
          id: 4,
          src: c4,
          alt: "bookshelf",
        },
        {
          id: 5,
          src: c5,
          alt: "entrance",
        },
      ],
      tabletBtns: [
        {
          name: "leftbtn",
          src: leftbtn,
          alt: "left-arrow",
        },
        {
          name: "rightbtn",
          src: rightbtn,
          alt: "right-arrow",
        },
      ],
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    moveToLeft() {
      if (this.currentIndex > 0) {
        this.$emit('move-to-left')
      }
    },
    moveToRight() {
      if (this.currentIndex < this.slides.length - 1) {
        this.$emit('move-to-right')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    gap: 58px;
  }
}
.carousel-content {
  display: flex;
  gap: 25px;
  overflow: hidden;

  @include tablet {
    align-items: center;
    width: 450px;
  }
}

.carousel-gallery {
  transition: transform 0.7s;
}

.tablet-btn {
  display: none;
  position: relative;
  width: 24px;
  height: 24px;
  @include tablet {
    display: flex;
  }
}
</style>