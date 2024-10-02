<template>
  <div class="modal__register" v-clickaway="toggleModalRegister">
    <span class="register__header">REGISTER</span>
    <img @click.prevent="toggleModalRegister" :src="closeBtn.src" :alt="closeBtn.alt" />
    <form class="register__field" @submit.prevent="handleRegister">
      <label for="first-name">First name</label>
      <input type="text" id="first-name" v-model="firstName" required />

      <label for="last-name">Last name</label>
      <input type="text" id="last-name" v-model="lastName" required />

      <label for="e-mail">E-mail</label>
      <input type="email" id="e-mail" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <input class="register__button" type="submit" value="Sign up" />
    </form>
    <div class="register__log-in">
      <span>Already have an account?</span>
      <a @click.prevent="toggleModalLogin" class="profile__log-in">Login</a>
    </div>
  </div>
</template>

<script>
import closeBtn from "@/assets/img/icons/close_btn.svg";
import { directive as clickaway } from "vue-clickaway";
import { setUserData, getUsersData, User } from '@/store';

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
        alt: "close_btn",
      },
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  props: {
    isModalRegisterOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleRegister() {
      registerNewUser(this.firstName, this.lastName, this.email, this.password);
      this.toggleModalRegister()
    },
    toggleModalLogin() {
      this.$emit('toggle-modal-login')
      this.toggleModalRegister()
    },
    toggleModalRegister() {
      this.$emit('toggle-modal-register')
    }
  }
}

function registerNewUser(firstName, lastName, email, password) {
  const usersData = getUsersData()

  if (usersData[email]) {
    alert("E-mail already exists")
    return
  }

  if (password.length < 8) {
    alert("Password must contain at least 8 symbols")
    return
  }

  const newUser = new User(firstName, lastName, email, password)
  setUserData(email, newUser)
}
</script>

<style lang="scss" scoped>
.modal__register {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  padding: 20px 25px;
  z-index: 501;
  background-color: $white;
  color: $black;
  font-family: $inter;

  .register__header {
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

    .register__button {
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

  .register__log-in {
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