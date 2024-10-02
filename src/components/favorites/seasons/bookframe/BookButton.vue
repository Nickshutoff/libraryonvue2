<template>
  <div class="book-btn-wrapper">
    <button @click='handlePurchaseButton' type="button" :class="buttonClass">{{buttonLabel}}</button>
  </div>
</template>

<script>
import { setUserData } from "@/store"

export default {
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
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    handlePurchaseButton() {
      if (!this.isUser) {
        this.$emit('toggle-modal-login')
      }
      else if (this.isUser && !this.currentUser.bank) {
        this.$emit('toggle-modal-purchase')
      }
      else if (this.isUser && this.currentUser.bank) {
        this.addBookToRent()
      }
    },
    addBookToRent() {
      if (!this.currentUser.booksRent.some(b => b.index === this.book.index)) {
        this.currentUser.booksRent.push(this.book)
        setUserData(this.currentUser.email, this.currentUser)
      }
    }
  },
  computed: {
    buttonLabel() {
      if (this.currentUser.booksRent && this.currentUser.booksRent.some(b => b.index === this.book.index)) {
        return 'Own'
      }
      return 'Buy'
    },
    buttonClass() {
      return {
        purchased: this.currentUser.booksRent && this.currentUser.booksRent.some(b => b.index === this.book.index)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 15px;
  width: 75px;
  height: 30px;
  border: 1px $dark solid;
  color: $black;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1px;
  background-color: $white;
  cursor: pointer;
  &:hover {
    border-color: $sand;
    color: $sand;
  }

  &.purchased {
    border-color: $sand;
    color: $sand;
  }
}
</style>