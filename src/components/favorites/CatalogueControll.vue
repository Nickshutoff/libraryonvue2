<template>
  <div class="catalogue-controll-wrapper">
    <fieldset class="radiobox-field">
      <legend>Pick favortites of season</legend>
      <div v-for="(radiobox, index) in radioboxes" :key="index">
        <input
          type="radio"
          :class="radiobox.class"
          :id="radiobox.id"
          :value="radiobox.value"
          v-model="selectedSeason"
        />
        <label :for="radiobox.id">{{ radiobox.name }}</label>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSeason: "1",
      radioboxes: [
        {
          name: "Winter",
          class: "winter",
          id: "winter",
          value: "1",
        },
        {
          name: "Spring",
          class: "spring",
          id: "spring",
          value: "2",
        },
        {
          name: "Summer",
          class: "summer",
          id: "summer",
          value: "3",
        },
        {
          name: "Autumn",
          class: "autumn",
          id: "autumn",
          value: "4",
        },
      ],
    };
  },
  methods: {
    changeSeason() {
      this.$emit("season-changed", this.selectedSeason);
    },
  },
  watch: {
    selectedSeason() {
      this.changeSeason();
    },
  },
};
</script>

<style lang="scss" scoped>
.catalogue-controll-wrapper {
  margin-top: 40px;
  font-family: $inter;
  font-size: 20px;
  line-height: 120%;

  .radiobox-field {
    display: flex;
    align-items: center;
    position: sticky;
    gap: 90px;

    legend {
      margin-bottom: 40px;
      font-weight: bold;
    }

    label {
      cursor: pointer;
    }

    input[type="radio"] {
      @include custom-radio;
      margin-right: 15px;
      cursor: pointer;
    }

    input[type="radio"]:checked + label {
      font-weight: bold;
    }
  }
}
</style>
