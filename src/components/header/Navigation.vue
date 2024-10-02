<template>
  <nav>
    <ul class="nav-container">
      <li class="list-item" v-for="(item, index) in navItems" :key="index">
        <a :href="`#${item.href}`" class="list-item-link">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          label: "About",
          href: "about",
        },
        {
          label: "Favorites",
          href: "favorites",
        },
        {
          label: "Coffee shop",
          href: "coffeeshop",
        },
        {
          label: "Contacts",
          href: "contacts",
        },
        {
          label: "Library Card",
          href: "librarycard",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  align-items: center;
  gap: 30px;

  @include tablet {
    display: none;
  }

  .list-item-link {
    font-family: $inter;
    font-size: 20px;
    line-height: 250%;
    color: $white;
    &:hover {
      color: $sand;
    }
  }
}
</style>