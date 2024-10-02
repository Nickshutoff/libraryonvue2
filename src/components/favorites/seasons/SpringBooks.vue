<template>
  <div class="spring">
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
          index: 5,
          title: "The Body",
          author: "By Stephen King",
          description:
            "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
          image: require("@/assets/img/books/spring/spr1.png"),
          alt: "book 1",
        },
        {
          index: 6,
          title: "Carry: A Memoir of Survival on Stolen Land",
          author: "By Toni Jenson",
          description:
            "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
          image: require("@/assets/img/books/spring/spr2.png"),
          alt: "book 2",
        },
        {
          index: 7,
          title: "Days of Distraction",
          author: "By Alexandra Chang",
          description:
            "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
          image: require("@/assets/img/books/spring/spr3.png"),
          alt: "book 3",
        },
        {
          index: 8,
          title: "Dominicana",
          author: "By Angie Cruz",
          description:
            "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
          image: require("@/assets/img/books/spring/spr4.png"),
          alt: "book 4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.spring {
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