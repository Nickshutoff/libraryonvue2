<template>
  <div class="summer">
    <div class="book" v-for="(book, index) in books" :key="index">
      <div class="book-wrapper">
        <div class="book-info">
          <BookLabel />
          <BookTitle :title="book.title" :author="book.author" />
          <BookDescription :description="book.description" />
        </div>
        <div class="book-btn-wrapper">
          <BookButton 
            :is-user="isUser"
            :current-user="currentUser"
            :is-modal-login-open="isModalLoginOpen"
            @toggle-modal-login="toggleModalLogin"
            :is-modal-purchase-open="isModalPurchaseOpen"
            @toggle-modal-purchase="toggleModalPurchase" 
            :book="book" />
        </div>
        <img class="book-image" :src="book.image" :alt="book.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import BookLabel from "./bookframe/BookLabel.vue";
import BookTitle from "./bookframe/BookTitle.vue";
import BookDescription from "./bookframe/BookDescription.vue";
import BookButton from "./bookframe/BookButton.vue";

export default {
  components: {
    BookLabel,
    BookTitle,
    BookDescription,
    BookButton,
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
    isModalLoginOpen: {
      type: Boolean,
      required: true
    },
    isModalPurchaseOpen: {
      type: Boolean,
      required: true
    },
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
      books: [
        {
          index: 9,
          title: "Crude: A Memoir",
          author: "By Pablo Fajardo & Sophie Tardy-Joubert",
          description:
            "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people.",
          image: require("@/assets/img/books/summer/sum1.png"),
          alt: "book 1",
        },
        {
          index: 10,
          title: "Let My People Go Surfing",
          author: "By Yvon Chouinard",
          description:
            "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
          image: require("@/assets/img/books/summer/sum2.png"),
          alt: "book 2",
        },
        {
          index: 11,
          title: "The Octopus Museum: Poems",
          author: "By Brenda Shaughnessy",
          description:
            "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
          image: require("@/assets/img/books/summer/sum3.png"),
          alt: "book 3",
        },
        {
          index: 12,
          title: "Shark Dialogues: A Novel",
          author: "By Kiana Davenport",
          description:
            "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
          image: require("@/assets/img/books/summer/sum4.png"),
          alt: "book 4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.summer {
  display: grid;
  grid-template-columns: repeat(2, 550px);
  grid-template-rows: repeat(2, 555px);
  grid-column-gap: 260px;
  row-gap: 40px;

  @include tablet {
    grid-template-columns: repeat(1, 550px);
  }

  .book {
    display: flex;
    border: 1px $black solid;
    padding: 15px;
    position: relative;

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-info {
      font-family: $inter;
      gap: 19px;
      display: flex;
      flex-direction: column;
    }
  }

  .book-image {
    position: absolute;
    width: 200px;
    height: 300px;
    bottom: -1px;
    right: -40px;
  }
}
</style>