<template>
  <div id="about">
    <SectionHeading :title="about.title" />
    <h3>{{ about.subtext }}</h3>
    <Carousel />
  </div>
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading.vue";
import Carousel from "./carousel/Carousel.vue";

export default {
  components: {
    SectionHeading,
    Carousel,
  },

  data() {
    return {
      about: {
        title: "About",
        subtext:
          "The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#about h3 {
  margin-top: 40px;
  text-align: center;
  font-family: $inter;
  font-size: 20px;
  line-height: 200%;
}
</style>