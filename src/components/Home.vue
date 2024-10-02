<template>
  <div id="home">
    <HeaderContainer 
      :is-user="isUser"
      :current-user="currentUser"
      @logged-out="loggedOut"
      :is-profile-menu-open="isProfileMenuOpen"
      @toggle-profile-menu="toggleProfileMenu"
      :is-any-modal-open="isAnyModalOpen"
      :is-modal-register-open="isModalRegisterOpen"
      @toggle-modal-register="toggleModalRegister" 
      :is-modal-login-open="isModalLoginOpen"
      @toggle-modal-login="toggleModalLogin"
      :is-modal-profile-open="isModalProfileOpen"
      @toggle-modal-profile="toggleModalProfile"/>
    <WelcomeContainer />
    <AboutContainer />
    <FavoritesContainer 
      :is-user="isUser"
      :current-user="currentUser"
      :is-modal-login-open="isModalLoginOpen"
      @toggle-modal-login="toggleModalLogin"
      :is-modal-purchase-open="isModalPurchaseOpen"
      @toggle-modal-purchase="toggleModalPurchase" />
    <CoffeeshopContainer />
    <ContactsContainer />
    <LibrarycardContainer 
      :is-user="isUser"
      :current-user="currentUser"
      :is-any-modal-open="isAnyModalOpen"
      :is-modal-register-open="isModalRegisterOpen"
      @toggle-modal-register="toggleModalRegister" 
      :is-modal-login-open="isModalLoginOpen"
      @toggle-modal-login="toggleModalLogin"
      :is-modal-profile-open="isModalProfileOpen"
      @toggle-modal-profile="toggleModalProfile"/>
    <FooterContainer />
    <Background 
      v-if="isAnyModalOpen"/>
    <RegisterWindow
      v-if="isModalRegisterOpen"
      :is-modal-register-open="isModalRegisterOpen"
      @toggle-modal-register="toggleModalRegister" 
      @toggle-modal-login="toggleModalLogin"/>
    <LoginWindow 
      v-if="isModalLoginOpen" 
      :is-user="isUser"
      @logged-in="loggedIn"
      :is-modal-login-open="isModalLoginOpen"
      @toggle-modal-login="toggleModalLogin" 
      @toggle-modal-register="toggleModalRegister"/>
    <ProfileWindow 
      v-if="isModalProfileOpen"
      :current-user="currentUser"
      :is-modal-profile-open="isModalProfileOpen"
      @toggle-modal-profile="toggleModalProfile" />
    <PurchaseWindow
      v-if="isModalPurchaseOpen" 
      :currentUser="currentUser"
      :is-modal-purchase-open="isModalPurchaseOpen"
      @toggle-modal-purchase="toggleModalPurchase" />
  </div>
</template>

<script>
import HeaderContainer from "./header/HeaderContainer.vue";
import WelcomeContainer from "./welcome/WelcomeContainer.vue";
import AboutContainer from "./about/AboutContainer.vue";
import FavoritesContainer from "./favorites/FavoritesContainer.vue";
import CoffeeshopContainer from "./coffeeshop/CoffeeshopContainer.vue";
import ContactsContainer from "./contacts/ContactsContainer.vue";
import LibrarycardContainer from "./librarycard/LibrarycardContainer.vue";
import FooterContainer from "./footer/FooterContainer.vue";
import Background from "./modal/Background.vue";
import RegisterWindow from "./modal/RegisterWindow.vue";
import LoginWindow from "./modal/LoginWindow.vue";
import ProfileWindow from "./modal/ProfileWindow.vue";
import PurchaseWindow from "./modal/PurchaseWindow.vue"
import { setUserData } from "@/store";

export default {
  components: {
    HeaderContainer,
    WelcomeContainer,
    AboutContainer,
    FavoritesContainer,
    CoffeeshopContainer,
    ContactsContainer,
    LibrarycardContainer,
    FooterContainer,
    Background,
    RegisterWindow,
    LoginWindow,
    ProfileWindow,
    PurchaseWindow
  },
  data() {
    return {
      isUser: false,
      currentUser: {},
      isProfileMenuOpen: false,
      isAnyModalOpen: false,
      isModalRegisterOpen: false,
      isModalLoginOpen: false,
      isModalProfileOpen: false,
      isModalPurchaseOpen: false
    }
  },
  methods: {
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    toggleModalRegister() {
      this.isModalRegisterOpen = !this.isModalRegisterOpen
      this.isAnyModalOpen = !this.isAnyModalOpen
    },
    toggleModalLogin() {
      this.isModalLoginOpen = !this.isModalLoginOpen
      this.isAnyModalOpen = !this.isAnyModalOpen
    },
    toggleModalProfile() {
      this.isModalProfileOpen = !this.isModalProfileOpen
      this.isAnyModalOpen = !this.isAnyModalOpen
    },
    toggleModalPurchase() {
      this.isModalPurchaseOpen = !this.isModalPurchaseOpen
      this.isAnyModalOpen = !this.isAnyModalOpen
    },
    loggedIn(user) {
      this.isUser = true,
      this.currentUser = user
    },
    loggedOut(user) {
      setUserData(user.email, user)
      this.isUser = false,
      this.currentUser = {}
    }
  },
};
</script>