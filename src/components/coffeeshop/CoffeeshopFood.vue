<template>
  <div class="food">
    <div class="food-title">
      <h6>{{ food.title }}</h6>
    </div>
    <div class="food-item" v-for="item in food.items" :key="item.name">
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
      food: {
        title: "Desserts & Cakes",
        items: [
          {
            name: "Forest Gateau",
            price: "$16",
          },
          {
            name: "Blue Moon",
            price: "$16",
          },
          {
            name: "Truffle Cake",
            price: "$15",
          },
          {
            name: "Chocolate Cake",
            price: "$18",
          },
          {
            name: "Poet's Dream Cake",
            price: "$16",
          },
          {
            name: "Pineapple Cake",
            price: "$14",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.food {
  min-width: 438px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
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
      margin-right: 60px;
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