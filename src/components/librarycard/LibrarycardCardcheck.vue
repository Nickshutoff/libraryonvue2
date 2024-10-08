<template>
  <div class="cardcheck">
    <h4 class="cardcheck-title">{{ text.title }}</h4>
    <form class="cardcheck-form" :class="{ error: error }" @submit.prevent="handleCardcheck">
      <div class="cardcheck-form-wrapper">
        <p>{{ text.subtitle }}</p>
        <div class="cardcheck-form-field">
          <input class="cardcheck-form-input" 
            v-model="fullName" 
            :readonly="isUser || checkedUser?.fullName"
            type="text" 
            id="readers-name"
            placeholder="Reader's name" required />
          <input class="cardcheck-form-input" 
            v-model="readersCard" 
            :readonly="isUser || checkedUser?.fullName"
            type="text" 
            id="readers-card-number"
            placeholder="Card number" required />
        </div>
      </div>
      <LibrarycardUserInfo 
        v-if="isUser || checkedUser?.fullName" 
        :is-user="isUser" 
        :current-user="currentUser" 
        :checked-user="checkedUser" />
      <button v-else type="submit" class="cardcheck-form-button" :class="{ error: error }">
        {{ text.buttontext }}
      </button>
    </form>
  </div>
</template>

<script>
import LibrarycardUserInfo from './LibrarycardUserInfo.vue'
import { getUserDataByNameAndCard } from '@/store'

export default {
  components: {
    LibrarycardUserInfo
  },
  data() {
    return {
      text: {
        title: "Find your library card",
        subtitle: "Brooklyn Public Library",
        buttontext: "Check the card",
      },
      fullName: "",
      readersCard: "",
      checkedUser: {},
      error: false
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
    }
  },
  watch: {
    currentUser: {
      immediate: true,
      handler(user) {
        if (this.isUser && user) {
          this.fullName = user.fullName
          this.readersCard = user.readersCard
        }
      }
    }
  },
  methods: {
    handleCardcheck() {
      let user = getUserDataByNameAndCard(this.fullName, this.readersCard)
      if (user) {
        this.$set(this, 'checkedUser', user)
        setTimeout(() => {
          this.$set(this, 'checkedUser', {})
        }, 15000)
      }
      else if (!user) {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 1500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cardcheck {
  display: flex;
  flex-direction: column;

  &-title {
    text-align: center;
    font-family: $inter;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 2%;
  }

  &-form {
    margin-top: 30px;
    padding: 20px 25px;
    width: 600px;
    border: 3px $sand solid;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &.error {
      border-color: red;
    }

    &-wrapper {
      padding: 20px 22.5px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-family: $forum;
      font-size: 30px;
      line-height: 50px;
      letter-spacing: 2%;
      background-color: $sand;
    }

    &-field {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    &-input {
      @include cardcheck-input;
      &:disabled {
        background-color: $white;
        color: $sand;
      }
    }

    &-button {
      @include cardcheck-button;
      &.error {
        border-color: red;
      }
    }
  }
}
</style>