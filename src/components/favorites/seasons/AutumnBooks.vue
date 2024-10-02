<template>
  <div class="autumn">
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
          index: 13,
          title: "Casual Conversation",
          author: "By Renia White",
          description:
            "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.",
          image: require("@/assets/img/books/autumn/aut1.png"),
          alt: "book 1",
        },
        {
          index: 14,
          title: "The Great Fire",
          author: "By Lou Ureneck",
          description:
            "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide.",
          image: require("@/assets/img/books/autumn/aut2.png"),
          alt: "book 2",
        },
        {
          index: 15,
          title: "Rickey: The Life and Legend",
          author: "By Howard Bryant",
          description:
            "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
          image: require("@/assets/img/books/autumn/aut3.png"),
          alt: "book 3",
        },
        {
          index: 16,
          title: "Slug: And Other Stories",
          author: "By Megan Milks",
          description:
            "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
          image: require("@/assets/img/books/autumn/aut4.png"),
          alt: "book 4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.autumn {
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