<template>
  <div class="header-container">
    <HeaderLogo />
    <div class="nav-n-profile">
      <Navigation />
      <UserProfileIcon 
        :is-profile-menu-open="isProfileMenuOpen"
        :is-user="isUser"
        :current-user="currentUser"
        @toggle-profile-menu="toggleProfileMenu"
      />
      <Hamburger
        :is-tablet-nav-open="isTabletNavOpen"
        @toggle-tablet-nav="toggleTabletNav"
      />
    </div>
    <TabletNav 
      v-if="isTabletNavOpen" 
      @toggle-tablet-nav="toggleTabletNav" 
    />
    <UserProfileMenu
      v-if="isProfileMenuOpen"
      :is-profile-menu-open="isProfileMenuOpen"
      :is-user="isUser"
      :current-user="currentUser"
      @toggle-profile-menu="toggleProfileMenu"
      @toggle-modal-register="toggleModalRegister"
      @toggle-modal-login="toggleModalLogin"
      @toggle-modal-profile="toggleModalProfile"
      @logged-out="loggedOut"
    />
  </div>
</template>

<script>
import HeaderLogo from "./HeaderLogo.vue";
import Navigation from "./Navigation.vue";
import Hamburger from "./tablet/Hamburger.vue";
import TabletNav from "./tablet/TabletNav.vue";
import UserProfileIcon from "./UserProfileIcon.vue";
import UserProfileMenu from "./UserProfileMenu.vue";

export default {
  data() {
    return {
      isTabletNavOpen: false,
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
    toggleTabletNav() {
      this.isTabletNavOpen = !this.isTabletNavOpen;
    },
    toggleProfileMenu() {
      this.$emit('toggle-profile-menu')
    },
    toggleModalRegister() {
      this.$emit('toggle-modal-register')
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
    },
    toggleModalProfile() {
      this.$emit('toggle-modal-profile')
    },
    loggedOut() {
      const user = this.currentUser
      this.$emit('logged-out', user)
    }
  },
  components: {
    HeaderLogo,
    Navigation,
    UserProfileIcon,
    Hamburger,
    TabletNav,
    UserProfileMenu,
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: $dark;
  color: $white;

  .nav-n-profile {
    display: flex;
    gap: 40px;
    align-items: center;
  }
}
</style>