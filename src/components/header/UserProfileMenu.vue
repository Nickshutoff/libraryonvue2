<template>
  <transition name="slide" appear>
    <div class="profile-menu" v-clickaway="toggleProfileMenu">
      <div class="profile-menu-head">
        <span class="profile-menu-head-user" :class="{'is-user': isUser}" v-if="isUser">{{  currentUser.readersCard  }}</span>
        <span v-else>{{ headText.guest }}</span>
        <hr />
      </div>
      <div class="profile-menu-body">
        <template v-if="isUser">
          <a @click.prevent="logOut">{{ forUser.link1 }}</a>
          <a @click.prevent="toggleModalProfile">{{ forUser.link2 }}</a>
        </template>
        <template v-else>
          <a @click.prevent="toggleModalLogin">{{ forGuest.link1 }}</a>
          <a @click.prevent="toggleModalRegister">{{ forGuest.link2 }}</a>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
import { directive as clickaway } from "vue-clickaway"

export default {
  directives: {
    clickaway,
  },
  data() {
    return {
      headText: {
        guest: "Profile",
      },
      forGuest: {
        link1: "Log in",
        link2: "Register",
      },
      forUser: {
        link1: "Log out",
        link2: "My profile"
      }
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
    },
    toggleModalRegister() {
      this.$emit('toggle-modal-register')
      this.toggleProfileMenu()
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
      this.toggleProfileMenu()
    },
    toggleModalProfile() {
      this.$emit('toggle-modal-profile')
      this.toggleProfileMenu()
    },
    logOut() {
      const user = this.currentUser
      this.$emit('logged-out', user)
      this.toggleProfileMenu()
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 90px;
  right: 0px;
  width: 80px;
  height: 115px;
  padding: 5px 0px;
  z-index: 16;
  background-color: $white;
  font-size: 15px;
  font-family: $inter;
  line-height: 20px;
  color: $black;
  transition: transform ease-in-out 0.3s;

  @include tablet {
    right: 78px;
  }

  &-head {
    font-weight: bold;

    &-user {
      font-size: 16px;
      &.is-user {
        font-size: 12px;
      }
    }

    hr {
      height: 1px;
      width: 40px;
      background-color: $sand;
      border: none;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      color: $black;
      margin-top: 10px;
      cursor: pointer;
      &:hover {
        color: $sand;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transform: translateY(0);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-200%);
}
</style>