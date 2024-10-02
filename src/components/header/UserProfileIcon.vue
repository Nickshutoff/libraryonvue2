<template>
  <div @click="toggleProfileMenu" class="user-profile_icon">
    <div v-if="isUser" class="user-profile_icon logged">{{  currentUser?.initials  }}</div>
    <img v-else :src="image.src" :alt="image.alt" />
  </div>
</template>

<script>
import IconUnlogged from "@/assets/img/icons/icon_profile.svg";

export default {
  data() {
    return {
      image: {
        src: IconUnlogged,
        alt: "icon-unlogged",
      },
    };
  },
  props: {
    isProfileMenuOpen: {
      type: Boolean,
      required: true
    },
    isUser: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true,
      default: null
    }
  },
  methods: {
    toggleProfileMenu() {
      this.$emit('toggle-profile-menu')
    }
  },
};
</script>

<style lang="scss" scoped>
.user-profile_icon {
  cursor: pointer;
  width: 28px;
  height: 28px;
  z-index: 16;
  align-content: center;
  &.logged {
    display: flex;
    align-items: center;
    color: $sand;
    justify-content: center;
    border: 1px solid $white;
    background-color: $white;
    font-family: $inter;
    border-radius: 50%;
    line-height: 20px;
    font-size: 15px;
  }
}
</style>