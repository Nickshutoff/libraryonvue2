<template>
  <footer class="footer">
    <div class="footer-info">
      <div class="footer-address">
        <span>{{ address }}</span>
        <span class="footer-social-media">
          <a href="#"><img :src="twitterIcon" :alt="twitterAlt" /></a>
          <a href="#"><img :src="instagramIcon" :alt="instagramAlt" /></a>
          <a href="#"><img :src="facebookIcon" :alt="facebookAlt" /></a>
        </span>
      </div>
      <div class="footer-working-hours">
        <div>
          <span>{{ workingHours.monFri }} <br></span>
          <span>{{ workingHours.monFriTime }}</span>
        </div>
        <div>
          <span>{{ workingHours.satSun }} <br></span>
          <span>{{ workingHours.satSunTime }}</span>
        </div>
      </div>
    </div>
    <hr />
    <div class="footer-copyright">
      <span>{{ copyrightYear }}</span>
      <span>{{ copyrightOwner }}</span>
      <a :href="githubLink">{{ githubName }}</a>
    </div>
  </footer>
</template>

<script>
import InstagramIcon from "@/assets/img/icons/u_instagram.png";
import TwitterIcon from "@/assets/img/icons/u_twitter-alt.png";
import FacebookIcon from "@/assets/img/icons/u_facebook-f.png";

export default {
  data() {
    return {
      address: "286 Cadman Plaza, New York, NY 11238, United States",
      twitterIcon: TwitterIcon,
      twitterAlt: "twitter",
      instagramIcon: InstagramIcon,
      instagramAlt: "instagram",
      facebookIcon: FacebookIcon,
      facebookAlt: "facebook",
      workingHours: {
        monFri: "Mon - Fri",
        monFriTime: "08:00 am - 07:00 pm",
        satSun: "Sat - Sun",
        satSunTime: "10:00 am - 06:00 pm",
      },
      copyrightYear: "2023",
      copyrightOwner: "Rolling Scopes School",
      githubLink: "https://github.com/nickshutoff",
      githubName: "Nickshutoff",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  font-family: $inter;
  background-color: $dark;
  color: $white;

  &-info {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    line-height: 20px;
  }

  &-address {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 230px;
  }

  &-social-media {
    display: flex;
    gap: 15px;
  }

  &-working-hours {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div span {
      display: flex;
      justify-content: flex-end
    }
  }

  hr {
    margin-top: 30px;
    width: 100%;
  }

  &-copyright {
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 200%;
    letter-spacing: 2px;

    a {
      color: inherit;
      &:hover {
        color: $sand;
      }
    }
  }
}
</style>
