<template>
  <div class="librarycard-authorize">
    <div class="librarycard-authorize-title">
      <h4 v-if="isUser">{{ text.user.title }}</h4>
      <h4 v-else>{{ text.guest.title }}</h4>
    </div>
    <div class="librarycard-authorize-subtitle">
      <h5 v-if="isUser">{{ text.user.subtitle }}</h5>
      <h5 v-else>{{ text.guest.subtitle }}</h5>
    </div>
    <div class="librarycard-authorize-wrapper">
      <a v-if="!isUser" @click.prevent="toggleModalRegister" class="profile-btn register">{{ buttons.text.register }}</a>
      <a v-if="!isUser" @click.prevent="toggleModalLogin" class="profile-btn log-in">{{ buttons.text.login }}</a>
      <a v-else @click.prevent="toggleModalProfile" class="profile__my-profile">{{  buttons.text.profile }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {
        guest: {
          title: "Get a reader card",
          subtitle: "You will be able to see a reader card after logging into account or you can register a new account"
        },
        user: {
          title: "Visit your profile",
          subtitle: "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
        }
      },
      buttons: {
        text: {
          register: "Sign Up",
          login: "Log In",
          profile: "Profile"
        },
      },
    };
  },
  props: {
    isUser: {
      type: Boolean,
      required: true
    },
    isModalLoginOpen: {
      type: Boolean,
      required: true
    },
    isModalRegisterOpen: {
      type: Boolean,
      required: true
    },
    isModalProfileOpen: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    toggleModalRegister() {
      this.$emit('toggle-modal-register')
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
    },
    toggleModalProfile() {
      this.$emit('toggle-modal-profile')
    },
  }
};
</script>

<style lang="scss" scoped>
.librarycard-authorize {
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-end;
  width: 100%;

  @include tablet {
    align-items: center;
  }

  &-title {
    font-family: $forum;
    font-size: 30px;
    line-height: 33px;
    letter-spacing: 2%;
  }

  &-subtitle {
    font-family: $inter;
    font-size: 20px;
    line-height: 40px;
    max-width: 456px;
    text-align: end;

    @include tablet {
      text-align: center;
      max-width: 590px;
    }
  }

  &-wrapper {
    display: flex;
    gap: 20px;

    a {
      @include librarycard-auth-buttons;
    }
  }
}
</style>