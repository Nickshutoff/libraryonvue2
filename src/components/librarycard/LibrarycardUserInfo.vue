<template>
  <div class="profile">
    <div class="profile-visits">
        <h6>{{ text.visits }}</h6>
        <img :src="visitsIcon.src" :alt="visitsIcon.alt">
        <span v-if="isUser" class="user-visits-counter">{{ currentUser.visitsCount }}</span>
        <span v-else class="user-visits-counter">{{ checkedUser?.visitsCount }}</span>
    </div>
    <div class="profile-bonuses">
        <h6>{{ text.bonuses }}</h6>
        <img :src="bonusesIcon.src" :alt="bonusesIcon.src">
        <span v-if="isUser" class="user-bonuses-counter">{{ currentUser.bonuses }}</span>
        <span v-else class="user-bonuses-counter">{{ checkedUser?.bonuses }}</span>
    </div>
    <div class="profile-books">
        <h6>{{ text.books }}</h6>
        <img :src="booksIcon.src" :alt="booksIcon.alt">
        <span v-if="isUser" class="user-books-counter"> {{ currentUser.booksRent.length }} </span>
        <span v-else class="user-books-counter"> {{ checkedUser?.booksRent.length }} </span>
    </div>
</div>
</template>

<script>
import visitsIcon from "@/assets/img/icons/visits.png"
import bonusesIcon from "@/assets/img/icons/bonuses.png"
import booksIcon from "@/assets/img/icons/books.png"

export default {
  data() {
    return {
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
      text: {
        visits: 'Visits',
        bonuses: 'Bonuses',
        books: 'Books'
      }
    }
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
    checkedUser: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: center;
  gap: 35px;
  font-family: $inter;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 2%;

  &-visits,
  &-bonuses,
  &-books {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
}
</style>