<template>
  <div id="contacts">
    <SectionHeading :title="contacts.title" />
    <div class="contacts-wrapper">
      <ContactsList />
      <ContactsMap />
    </div>
  </div>
</template>

<script>
import SectionHeading from "../common/SectionHeading.vue";
import ContactsList from "./ContactsList.vue";
import ContactsMap from "./ContactsMap.vue";

export default {
  components: {
    SectionHeading,
    ContactsList,
    ContactsMap,
  },
  data() {
    return {
      contacts: {
        title: "Our Contacts",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#contacts {
  font-family: $inter;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 2px;
}

.contacts-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @include tablet {
    flex-direction: column;
    gap: 100px;
  }
}
</style>
