<template>
  <div class="winter">
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
          index: 1,
          title: "The Book Eaters",
          author: "By Sunyi Dean",
          description:
            "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.",
          image: require("@/assets/img/books/winter/win1.png"),
          alt: "book 1",
        },
        {
          index: 2,
          title: "Cackle",
          author: "By Rachel Harrison",
          description:
            "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
          image: require("@/assets/img/books/winter/win2.png"),
          alt: "book 2",
        },
        {
          index: 3,
          title: "Dante: Poet of the Secular World",
          author: "By Erich Auerbach",
          description:
            "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
          image: require("@/assets/img/books/winter/win3.png"),
          alt: "book 3",
        },
        {
          index: 4,
          title: "The Last Queen",
          author: "By Clive Irving",
          description:
            "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
          image: require("@/assets/img/books/winter/win4.png"),
          alt: "book 4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.winter {
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