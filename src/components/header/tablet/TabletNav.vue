<template>
  <transition name="slide" appear>
    <nav class="nav-container" v-clickaway="toggleTabletNav">
      <ul class="nav-list">
        <li
          class="nav-list-item"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <a
            :href="`#${item.href}`"
            @click="toggleTabletNav"
            class="nav-list-item-link"
            >{{ item.label }}</a
          >
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import { directive as clickaway } from "vue-clickaway";

export default {
  directives: {
    clickaway,
  },
  methods: {
    toggleTabletNav() {
      this.$emit('toggle-tablet-nav')
    }
  },
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
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;
  width: 332px;
  height: 570px;
  background-color: $dark;
  transition: transform 0.3s ease;
}

.nav-list {
  width: 118px;
  height: 370px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-list-item-link {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: $white;
  text-decoration: none;
  line-height: 250%;
  &:hover {
    color: $sand;
  }
}

.slide-enter-active,
.slide-leave-active {
  transform: translateY(0);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>