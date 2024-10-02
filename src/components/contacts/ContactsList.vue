<template>
  <div class="contacts-list">
    <div class="phones-title">
      <h4>{{ title.phones }}</h4>
    </div>
    <div class="phones-list">
      <a
        v-for="(phone, index) in phones"
        :key="index"
        :href="'tel:' + phone.number"
      >
        {{ phone.text }}
      </a>
    </div>
    <div class="staff-list">
      <h4 class="staff-title">{{ title.staffs }}</h4>
      <h5>
        {{ staffs.position }}:
        <a :href="'mailto:' + staffs.email">{{ staffs.name }}</a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        phones: "For all Library inquiries:",
        staffs: "Senior Staff",
      },
      phones: [
        {
          text: "Please call (617) 730-2370",
          number: "6177302370",
        },
        {
          text: "For TTY service, please call (617) 730-2370",
          number: "6177302370",
        },
        {
          text: "Putterham Library: (617) 730-2385",
          number: "6177302385",
        },
      ],
      staffs: {
        position: "Library Director",
        name: "Amanda Hirst",
        email: "AmandaHirst@gmail.com",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.contacts-list {
  gap: 40px;
  display: flex;
  flex-direction: column;

  .phones-title,
  .staff-title {
    font-weight: bold;
  }

  .phones-list,
  .staff-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    color: $black;

    &:hover {
      color: $sand;
    }
  }

  a[href^="mailto:"] {
    font-weight: bold;
  }
}
</style>