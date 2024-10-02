<template>
  <div id="coffeeshop">
    <SectionHeading :title="coffeeshop.title" />
    <h3 class="coffeeshop-subtext">{{ coffeeshop.subtext }}</h3>
    <div class="coffeeshop-pricelist">
      <CoffeeshopDrinks />
      <CoffeeshopFood />
    </div>
  </div>
</template>

<script>
import SectionHeading from "../common/SectionHeading.vue";
import CoffeeshopDrinks from "./CoffeeshopDrinks.vue";
import CoffeeshopFood from "./CoffeeshopFood.vue";

export default {
  components: {
    SectionHeading,
    CoffeeshopDrinks,
    CoffeeshopFood,
  },
  data() {
    return {
      coffeeshop: {
        title: "Coffee Shop",
        subtext:
          "In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.coffeeshop-subtext {
  margin-top: 40px;
  text-align: center;
  font-family: $inter;
  font-size: 20px;
  line-height: 200%;
  letter-spacing: 1.9px;
}

.coffeeshop-pricelist {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  @include tablet {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
}
</style>