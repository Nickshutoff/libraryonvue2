<template>
  <div class="drinks">
    <div class="drinks-title">
      <h6>{{ drinks.title }}</h6>
    </div>
    <div class="drinks-item" v-for="item in drinks.items" :key="item.name">
      <p>{{ item.name }}</p>
      <hr />
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: {
        title: "Coffee & Tea",
        items: [
          {
            name: "Cold Brew Coffee",
            price: "$3",
          },
          {
            name: "French Press Pot",
            price: "$5",
          },
          {
            name: "Espresso",
            price: "$2",
          },
          {
            name: "Cappuccino",
            price: "$4",
          },
          {
            name: "Hot tea",
            price: "$2",
          },
          {
            name: "Cold tea",
            price: "$2",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.drinks {
  max-width: 438px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: $forum;
  line-height: 40px;
  letter-spacing: 2px;

  &-title {
    font-size: 40px;
    color: $sand;
  }

  &-item {
    font-size: 20px;
    color: $black;
    display: flex;
    align-items: center;

    p:first-child {
      font-family: $inter;
    }

    hr {
      width: 100px;
      background-color: $sand;
      height: 1px;
      border: none;
      margin-right: 60px;
    }
  }
}
</style>