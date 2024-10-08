<template>
  <transition name="fade">
    <div v-if="isModalRegisterOpen" class="modal__register" v-clickaway="toggleModalRegister">
      <span class="register__header">{{ text.header }}</span>
      <img @click.prevent="toggleModalRegister" :src="closeBtn.src" :alt="closeBtn.alt" />
      <form class="register__field" @submit.prevent="handleRegister">
        <label for="first-name">{{ text.label.firstName }}</label>
        <input type="text" id="first-name" v-model="firstName" />
  
        <label for="last-name">{{ text.label.lastName }}</label>
        <input type="text" id="last-name" v-model="lastName" />
  
        <label for="e-mail">{{ text.label.email }}</label>
        <input type="email" id="e-mail" v-model="email" />
  
        <label for="password">{{ text.label.password }}</label>
        <input type="password" id="password" v-model="password" />

        <transition name="fade">
          <span v-if="errorMessage">{{ errorMessage }}</span>
        </transition>
  
        <input class="register__button" type="submit" value="Sign up" />
      </form>
      <div class="register__log-in">
        <span>{{ text.toLogin.text }}</span>
        <a @click.prevent="toggleModalLogin" class="profile__log-in">{{ text.toLogin.link }}</a>
      </div>
    </div>
  </transition>
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
      text: {
        header: 'REGISTER',
        label: {
          firstName: 'First name',
          lastName: 'Last name',
          email: 'E-mail',
          password: 'Password'
        },
        toLogin: {
          text: 'Already have an account?',
          link: 'Login'
        }
      },
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  props: {
    isModalRegisterOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    async handleRegister() {
      try {
        const usersData = await getUsersData()
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!this.firstName || !this.lastName) {
          throw new Error("Please enter your name")
        }
        if (usersData[this.email]) {
          throw new Error("E-mail already exists")
        }
        if (!this.email) {
          throw new Error('Please enter your e-mail')
        }
        if (!emailRegex.test(this.email)) {
          throw new Error("Invalid e-mail format")
        }
        if (this.password.length < 8) {
          throw new Error("Password is too short")
        }
        const newUser = new User(this.firstName, this.lastName, this.email, this.password)
        await setUserData(this.email, newUser)
        this.toggleModalRegister()
      }
      catch(error) {
        this.errorMessage = error.message
        setTimeout(() => {
          this.errorMessage = ''
        }, 3000)
      }
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
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal__register {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  padding: 20px 25px;
  z-index: 15;
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

    span {
      position: absolute;
      top: 298px;
      font-size: 12px;
      color: red;
    }

    .register__button {
      display: flex;
      align-items: center;
      justify-content: center;
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