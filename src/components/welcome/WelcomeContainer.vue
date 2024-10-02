<template>
  <div id="welcome">
    <LinearGradient />
    <WelcomeLabel />
  </div>
</template>

<script>
import LinearGradient from "./LinearGradient.vue";
import WelcomeLabel from "./WelcomeLabel.vue";

export default {
  components: {
    LinearGradient,
    WelcomeLabel,
  },
};
</script>

<style lang="scss" scoped>
#welcome {
  position: relative;
  height: 600px;
  background-image: url("/src/assets/img/welcome.png");
  background-position: center center;
  background-size: cover;
}
</style>