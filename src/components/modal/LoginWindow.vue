<template>
  <transition name="fade" appear>
    <div class="modal__log-in" v-clickaway="toggleModalLogin">
      <span class="log-in__text">LOGIN</span>
      <img @click="toggleModalLogin" :src="closeBtn.src" :alt="closeBtn.alt" class="log-in__close" />
      <form @submit.prevent="handleLogin" class="log-in__field" id="login">
        <label for="e-mail">E-mail or readers card</label>
        <input type="text" autocomplete="email" v-model="email" id="e-mail" required />
        <label for="password">Password</label>
        <input type="password" v-model="password" id="login_password" required />
        <input class="log-in__button" type="submit" value="Log in" />
      </form>
      <div class="log-in__register">
        <span>Don't have an account?</span>
        <a @click.prevent="toggleModalRegister">Register</a>
      </div>
    </div>
  </transition>
</template>

<script>
import closeBtn from "@/assets/img/icons/close_btn.svg";
import { directive as clickaway } from "vue-clickaway";
import { getUserData, setUserData } from "@/store";

export default {
  components: {
    closeBtn,
  },
  directives: {
    clickaway
  },
  data() {
    return {
      closeBtn: {
        src: closeBtn,
        alt: "close_button",
      },
      email: '',
      password: ''
    };
  },
  props: {
    isModalLoginOpen: {
      type: Boolean,
      required: true
    },
    isUser: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    handleLogin() {
      const user = getUserData(this.email, this.password)
      if (user.email == this.email && user.password == this.password) {
        this.$emit('is-user')
        this.$emit('logged-in', user)
        user.visitsCount++
        setUserData(user.email, user)
      }
      this.toggleModalLogin()
    },
    toggleModalRegister() {
      this.$emit('toggle-modal-register')
      this.toggleModalLogin()
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal__log-in {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  padding: 20px 25px;
  z-index: 502;
  background-color: $white;
  color: $black;
  font-family: $inter;

  .log-in__text {
    text-align: center;
    font-family: $forum;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.4px;
  }

  img {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    input {
      border-color: $sand;
      font-family: $inter;
      appearance: textfield;
      height: 25px;
      width: 100%;
    }

    .log-in__button {
      background-color: $white;
      border-color: $black;
      margin-top: 10px;
      width: 75px;
      height: 30px;
      border-radius: 2px;
      font-weight: bold;
      letter-spacing: 1px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .log-in__register {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    font-size: 10px;
    line-height: 12px;

    a {
      text-decoration: underline;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;

      &:hover {
        color: $sand;
      }
    }
  }
}
</style>