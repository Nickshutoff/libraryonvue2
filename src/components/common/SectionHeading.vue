<template>
  <div class="section-heading">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-title-line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
.section-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $dark;

  .section-title {
    font-family: $forum;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: 0.05em;
  }

  .section-title-line {
    margin-top: 20px;
    width: 50px;
    height: 1px;
    background: $dark;
  }
}
</style>
