<template>
  <div class="welcome-label">
    <h2 class="welcome-text">
      Welcome <br />
      to the Brooklyn <br />
      Library
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.welcome-label {
  position: absolute;
  z-index: 10;
  top: 220px;
  width: 600px;
  height: 220px;
  background-color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  .welcome-text {
    color: $white;
    font-family: $forum;
    font-size: 40px;
    line-height: 125%;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>