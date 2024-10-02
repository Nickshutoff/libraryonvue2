<template>
  <div class="book-title">
    <h5>{{ title }}</h5>
    <h6>{{ author }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.book-title {
  font-weight: bold;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 2px;
  text-transform: capitalize;

  h5 {
    text-transform: uppercase;
  }
}
</style>