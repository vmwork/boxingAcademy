<template>
  <div class="offrer flex flex-col items-center">
    <h2 class="">What we can ofeer ?</h2>
    <ul class="flex flex-wrap justify-center gap-5 mt-5 mb-5">
      <li><span>Femail Traning</span></li>
      <li><span>Personal Traning</span></li>
      <li><span>Ages Groupe</span></li>
      <li><span>Proficiently Trainer's</span></li>
      <li><span>Frendly Communiti</span></li>
    </ul>
    <button class="offer-free-button"><span>FREE TRAINING</span></button>
  </div>
</template>

<style lang="scss" scoped>
.offrer {
  background-image: url("../../assets/img/mob-bg.png");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 90%;
  margin-top: -70px;
  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: center;
    letter-spacing: 2px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  ul {
    width: 325px;
    li {
      font-size: 10px;
      font-family: ClashGrotesk-Medium, sans-serif;
      background-color: rgba(0, 0, 0, 0.43);
      padding: 2.2px 6.7px;
      border-radius: 27px;
      span {
      }
    }
  }
  .offer-free-button {
    padding-bottom: 60px;
    letter-spacing: 1px;
    font-size: 10px;
    font-family: ClashGrotesk-Medium, sans-serif;
    span {
      background-color: $bg-red;
      padding: 8.5px 14.5px;
      border-radius: 60px;
    }
  }
}
</style>
