<template>
  <div class="aside pl-4 pr-4">
    <button class="rotate-90 flex justify-center w-full" @click="toggleMenu">|||</button>
    <div class="aside-buttons flex flex-col">
      <button>button -1</button>
      <button>button -2</button>
      <button>button -3</button>
      <button>button -4</button>
      <button>button -5</button>
    </div>
    <AsideMenu v-if="isOpenMenu" @close-menu="toggleMenu" />
  </div>
</template>
<script setup>
const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>
