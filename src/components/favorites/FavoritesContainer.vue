<template>
  <div id="favorites">
    <SectionHeading :title="favorites.title" />
    <CatalogueControll @season-changed="currentSeason = $event" />
    <CatalogueWrapper 
      :current-season="currentSeason"
      :is-user="isUser"
      :current-user="currentUser"
      :is-modal-login-open="isModalLoginOpen"
      @toggle-modal-login="toggleModalLogin"
      :is-modal-purchase-open="isModalPurchaseOpen"
      @toggle-modal-purchase="toggleModalPurchase" />
  </div>
</template>

<script>
import SectionHeading from "@/components/common/SectionHeading.vue";
import CatalogueControll from "./CatalogueControll.vue";
import CatalogueWrapper from "./CatalogueWrapper.vue";

export default {
  components: {
    SectionHeading,
    CatalogueControll,
    CatalogueWrapper,
  },
  props: {
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
  },
  data() {
    return {
      favorites: {
        title: "Favorites",
      },
      currentSeason: "1",
    };
  },
};
</script>