<template>
  <transition name="fade">
    <div v-if="isModalPurchaseOpen" class="modal__buy" v-clickaway="toggleModalPurchase">
      <img @click="toggleModalPurchase" :src="closeBtn.src" :alt="closeBtn.alt" class="buy__close">
      <span class="buy__text">{{ text.header }}</span>
      <div class="buy__content">
        <form class="buy__form" id="buy" @submit.prevent="handlePurchase">
          <div class="buy__row">
            <label for="bank-card-number">{{ text.label.cardNumber }}</label>
            <input v-model="cardNumber" type="number" id="bank-card-number" minlength="16" maxlength="16" required>
          </div>

          <div class="buy__row">
            <label for="bank-card-exp">{{ text.label.expiration }}</label>
            <div class="buy__row__exp-inputs">
              <input v-model="cardMonth" type="number" id="bank-card-exp-code-month" pattern="[0-9]{2}" maxlength="2" required>
              <input v-model="cardYear" type="number" id="bank-card-exp-code-year" pattern="[0-9]{2}" maxlength="2" required>
            </div>
          </div>

          <div class="buy__row cvc">
            <label for="bank-card-cvc">{{ text.label.cvc }}</label>
            <input v-model="cardCvc" type="number" id="bank-card-cvc" pattern="[0-9]{3}" minlength="3" maxlength="3" required>
          </div>

          <div class="buy__row second">
            <label for="bank-card-name">{{ text.label.holdersName }}</label>
            <input v-model="holdersName" type="text" id="bank-card-name" required>
          </div>

          <div class="buy__row">
            <label for="bank-postal-code">{{ text.label.postalCode }}</label>
            <input v-model="postalCode" type="number" id="bank-postal-code" pattern="[0-9]{6}" required>
          </div>

          <div class="buy__row">
            <label for="bank-city">{{ text.label.city }}</label>
            <input v-model="city" type="text" id="bank-city" required>
          </div>

          <div class="buy__row__submit">
            <input class="buy__button" type="submit" value="Buy">
            <span class="buy__price">{{ text.price }}</span>
          </div>
        </form>
        <span class="buy__info">{{ text.info }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import closeBtn from "@/assets/img/icons/close_btn.svg"
import { directive as clickaway } from "vue-clickaway"
import { setUserData } from "@/store"

export default {
  directives: {
    clickaway
  },
  data() {
    return {
      closeBtn: {
        src: closeBtn,
        alt: "close_button"
      },
      text: {
        header: 'BUY A LIBRARY CARD',
        label: {
          cardNumber: 'Bank card number',
          expiration: 'Expiration code',
          cvc: 'CVC',
          holdersName: 'Cardholder name',
          postalCode: 'Postal code',
          city: 'City / Town',
        },
        price: '$ 25.00',
        info: 'If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.'
      },
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardCvc: '',
      holdersName: '',
      postalCode: '',
      city: ''
    }
  },
  props: {
    isModalPurchaseOpen: {
      type: Boolean,
      required: true
    },
    currentUser: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleModalPurchase() {
      this.$emit('toggle-modal-purchase')
    },
    handlePurchase() {
      this.addBankDetailsToUser()
      setUserData(this.currentUser.email, this.currentUser)
      this.toggleModalPurchase()
    },
    addBankDetailsToUser() {
    this.currentUser.bank = {
      cardNumber: this.cardNumber,
      cardMonth: this.cardMonth,
      cardYear: this.cardYear,
      cardCvc: this.cardCvc,
      holdersName: this.holdersName,
      postalCode: this.postalCode,
      city: this.city
    }
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

.modal__buy {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 540px;
  z-index: 15;
  background-color: $white;
  color: $black;

  .buy__close {
    position: absolute;
    top: 25px;
    right: 25px;
    filter: invert(1);
    cursor: pointer;
  }

  .buy__text {
    text-align: center;
    align-content: center;
    height: 60px;
    background-color: $black;
    color: $white;
    font-family: $forum;
    font-size: 40px;
    line-height: 20px;
    letter-spacing: 0.4px;
  }

  .buy__content {
    display: flex;
    gap: 40px;
    padding: 30px 40px;

    form {
      display: grid;
      width: 200px;

      .buy__row {
        line-height: 20px;

        &__exp-inputs {
          display: flex;
          gap: 10px;

          input {
            font-family: $inter;
            width: 45px;
            appearance: textfield;
          }
        }

        &.cvc {
          width: 45px;
        }

        &.second {
          margin-top: 10px;
        }

        &__submit {
          display: flex;
          gap: 25px;

          span {
            text-align: center;
            align-content: center;
            font-family: $inter;
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 2px;
          }
        }
      }

      label {
        margin-bottom: 10px;
        font-family: $inter;
        font-size: 15px;
        letter-spacing: 2%;
        line-height: 20px;
      }

      input {
        margin-top: 10px;
        margin-bottom: 10px;
        border-color: $sand;
        height: 20px;
        width: 100%;
        font-family: $inter;
        appearance: textfield;
      }

      .buy__button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;
        margin-top: 10px;
        width: 75px;
        height: 30px;
        border-color: $black;
        border-radius: 2px;
        font-weight: bold;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          color: $sand;
          border-color: $sand;
        }
      }
    }

    .buy__info {
      width: 330px;
      font-family: $inter;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 2px;
    }
  }
}
</style>