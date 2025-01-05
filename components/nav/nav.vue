<template>
  <div class="nav flex justify-between items-center">
    <div class="logo flex items-center">
      <NuxtImg class="logo-img mr-2" src="/logo.svg" />
      <div class="nav_boxing-academy flex">BOXING <span class="ml-1">ACADEMY</span></div>
    </div>
    <!-- <div class="nav-menu">menu</div> -->
    <div class="flex items-center ml-auto">
      <button class="contact-us-button">Contact Us</button>
      <button class="arrow-button flex justify-center items-center">
        <img src="../../assets//img/arrow.svg" alt="" />
      </button>
    </div>
  </div>
</template>

.
<style lang="scss" scoped>
.nav {
  .logo-img {
    width: 32px;
  }
  .nav_boxing-academy span {
    color: $text-red;
  }
  .contact-us-button {
    background-color: $bg-red;
    padding: 6px 14px;
    border-radius: 61px;
    font-size: 10px;
    font-family: ClashGrotesk-Medium, sans-serif;
  }
  .arrow-button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $bg-red;
  }
}
</style>
