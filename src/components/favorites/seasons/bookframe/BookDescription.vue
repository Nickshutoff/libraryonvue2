<template>
  <div class="book-description">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.book-description {
  font-weight: bold;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-weight: normal;
  max-width: 355px;
}
</style>