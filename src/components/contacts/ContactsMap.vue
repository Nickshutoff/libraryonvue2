<template>
  <div class="contacts-map">
    <iframe
      title="googlemaps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.01579236972!2d-73.99387252271052!3d40.69564983861432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b649b8c3%3A0x6342a2291cea2e!2zMjg2IENhZG1hbiBQbHogVywgQnJvb2tseW4sIE5ZIDExMjAxLCDQodCo0JA!5e0!3m2!1sru!2sru!4v1713020899983!5m2!1sru!2sru"
      width="696"
      height="414"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.contacts-map {
  @include tablet {
    display: flex;
    justify-content: center;
  }
}
</style>