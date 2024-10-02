<template>
  <div id="librarycard">
    <SectionHeading :title="librarycard.title" />
    <div class="librarycard-wrapper">
      <LibrarycardCardcheck 
        :is-user="isUser"
        :current-user="currentUser" />
      <LibrarycardAuthorization 
        :is-user="isUser"
        :is-any-modal-open="isAnyModalOpen"
        :is-modal-register-open="isModalRegisterOpen"
        @toggle-modal-register="toggleModalRegister" 
        :is-modal-login-open="isModalLoginOpen"
        @toggle-modal-login="toggleModalLogin"
        :is-modal-profile-open="isModalProfileOpen"
        @toggle-modal-profile="toggleModalProfile" />
    </div>
  </div>
</template>

<script>
import SectionHeading from "../common/SectionHeading.vue";
import LibrarycardCardcheck from "./LibrarycardCardcheck.vue";
import LibrarycardAuthorization from "./LibrarycardAuthorization.vue";

export default {
  components: {
    SectionHeading,
    LibrarycardCardcheck,
    LibrarycardAuthorization,
  },
  data() {
    return {
      librarycard: {
        title: "Digital Library Cards",
      },
    };
  },
  props: {
    isUser: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true,
    },
    isAnyModalOpen: {
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
.librarycard-wrapper {
  margin-top: 40px;
  display: flex;

  @include tablet {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
