<template>
  <div class="catalogue-wrapper">
    <transition name="fade" mode="out-in">
      <WinterBooks 
        v-if="currentSeason === '1'"
        :is-user="isUser"
        :current-user="currentUser"
        :is-modal-login-open="isModalLoginOpen"
        @toggle-modal-login="toggleModalLogin"
        :is-modal-purchase-open="isModalPurchaseOpen"
        @toggle-modal-purchase="toggleModalPurchase" />
      <SpringBooks 
        v-else-if="currentSeason === '2'" 
        :is-user="isUser"
        :current-user="currentUser"
        :is-modal-login-open="isModalLoginOpen"
        @toggle-modal-login="toggleModalLogin"
        :is-modal-purchase-open="isModalPurchaseOpen"
        @toggle-modal-purchase="toggleModalPurchase"/>
      <SummerBooks 
        v-else-if="currentSeason === '3'" 
        :is-user="isUser"
        :current-user="currentUser"
        :is-modal-login-open="isModalLoginOpen"
        @toggle-modal-login="toggleModalLogin"
        :is-modal-purchase-open="isModalPurchaseOpen"
        @toggle-modal-purchase="toggleModalPurchase"/>
      <AutumnBooks 
        v-else-if="currentSeason === '4'" 
        :is-user="isUser"
        :current-user="currentUser"
        :is-modal-login-open="isModalLoginOpen"
        @toggle-modal-login="toggleModalLogin"
        :is-modal-purchase-open="isModalPurchaseOpen"
        @toggle-modal-purchase="toggleModalPurchase"/>
    </transition>
  </div>
</template>

<script>
import WinterBooks from "./seasons/WinterBooks.vue";
import SpringBooks from "./seasons/SpringBooks.vue";
import SummerBooks from "./seasons/SummerBooks.vue";
import AutumnBooks from "./seasons/AutumnBooks.vue";

export default {
  components: {
    WinterBooks,
    SpringBooks,
    SummerBooks,
    AutumnBooks,
  },
  props: {
    currentSeason: {
      type: String,
      required: true,
    },
    isUser: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true,
      default: {}
    },
    isModalLoginOpen: {
      type: Boolean,
      required: true
    },
    isModalPurchaseOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleModalPurchase() {
      this.$emit('toggle-modal-purchase')
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
    }
  }
};
</script>

<style lang="scss" scoped>
.catalogue-wrapper {
  display: flex;
  margin-top: 40px;

  @include tablet {
    justify-content: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>