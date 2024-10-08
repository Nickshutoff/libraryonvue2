<template>
  <transition name="fade">
    <div v-if="isModalProfileOpen" class="modal__profile" v-clickaway="toggleModalProfile">
      <img @click="toggleModalProfile" :src="closeBtn.src" :alt="closeBtn.alt" class="profile__close">
      <div class="profile__user">
        <div class="icon__auth">{{ currentUser.initials }}</div>
        <div class="user-full-name">{{ currentUser.fullName }}</div>
      </div>
      <div class="profile__info">
        <span class="profile-title">MY PROFILE</span>
        <div class="profile-statistics">
          <div class="profile-visits">
            <h6>Visits</h6>
            <img :src="visitsIcon.src" :alt="visitsIcon.alt">
            <span class="user-visits-counter">{{ currentUser.visitsCount }}</span>
          </div>
          <div class="profile-bonuses">
            <h6>Bonuses</h6>
            <img :src="bonusesIcon.src" :alt="bonusesIcon.src">
            <span class="user-bonuses-counter">{{ currentUser.bonuses }}</span>
          </div>
          <div class="profile-books">
            <h6>Books</h6>
            <img :src="booksIcon.src" :alt="booksIcon.alt">
            <span class="user-books-counter"> {{ currentUser.booksRent.length }} </span>
          </div>
        </div>
        <div class="profile-rented">
          <h6>Rented books</h6>
          <ul class="rented-list">
            <li v-for="book in currentUser.booksRent" :key="book.index">
              {{ book.title }}, {{ book.author.replace('By ', '') }}
            </li>
          </ul>
        </div>
        <div class="profile-card-number">
          <h6>Card number</h6>
          <span class="user-card-number">{{ currentUser.readersCard }}</span>
          <img @click="copyReadersCard" :src="copyBtn.src" :alt="copyBtn.alt">
          <transition name="fade">
            <span v-if="copied">copied!</span>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeBtn from "@/assets/img/icons/close_btn.svg"
import visitsIcon from "@/assets/img/icons/visits.png"
import bonusesIcon from "@/assets/img/icons/bonuses.png"
import booksIcon from "@/assets/img/icons/books.png"
import copyBtn from "@/assets/img/icons/icon_copy.svg"
import { directive as clickaway } from "vue-clickaway"

export default {
  directives: {
    clickaway,
  },
  data() {
    return {
      closeBtn: {
        src: closeBtn,
        alt: "close_button",
      },
      visitsIcon: {
        src: visitsIcon,
        alt: "visits_icon",
      },
      bonusesIcon: {
        src: bonusesIcon,
        alt: "bonuses_icon",
      },
      booksIcon: {
        src: booksIcon,
        alt: "books_icon",
      },
      copyBtn: {
        src: copyBtn,
        alt: "copy_button"
      },
      copied: false
    }
  },
  props: {
    isModalProfileOpen: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleModalProfile() {
      this.$emit('toggle-modal-profile')
    },
    copyReadersCard() {
      navigator.clipboard.writeText(this.currentUser?.readersCard)
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 3000)
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

.modal__profile {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  z-index: 15;
  background-color: $white;
  color: $black;

  .profile__close {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }

  .profile__user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 170px;
    gap: 15px;
    background-color: $black;
    font-family: $inter;
    font-size: 20px;
    line-height: 20px;

    .icon__auth {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      background-color: $white;
      color: $sand;
    }

    .user-full-name {
      width: 120px;
      height: max-content;
      text-align: center;
      align-content: center;
      background-color: $white;
      color: $black;
    }
  }

  .profile__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px 20px;

    .profile-title {
      font-family: $forum;
      font-size: 40px;
      line-height: 20px;
      letter-spacing: 0.4px;
      margin-bottom: 10px;
    }

    .profile-statistics {
      display: flex;
      gap: 35px;
      margin-top: 40px;
      font-family: $inter;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 2%;

      .profile-visits,
      .profile-bonuses,
      .profile-books {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 13px;

        span {
          font-size: 10px;
        }
      }
    }

    .profile-rented {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 30px;
      font-family: $inter;

      h6 {
        font-size: 25px;
        line-height: 20px;
      }

      .rented-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: 80px;
        list-style: inside;
        overflow: scroll;
        overflow-x: hidden;

        li {
          font-size: 20px;
          line-height: 20px;
          letter-spacing: 2px;
        }
      }
    }

    .profile-card-number {
      display: flex;
      gap: 15px;
      font-family: $inter;
      font-size: 20px;
      line-height: 20px;

      span {
        color: $sand;
      }

      img:hover {
        cursor: pointer;
      }
    }
  }
}
</style>