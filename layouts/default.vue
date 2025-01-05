<template>
  <div class="main">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.main {
  background-color: $bg-black;
  color: $text-white;
  height: 100vh;
  .wrapper {
    display: flex;
    flex-direction: column;
    // align-items: center;
    min-height: 100vh;
    width: 100%;
  }
}
</style>
