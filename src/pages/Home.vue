<script setup lang="ts">
onMounted(() => {
  window.scrollTo({
    behavior: "smooth",
  });
});

const showSpinner = ref(true);

onMounted(() => {
  showSpinner.value = false;
});
</script>

<template>
  <main>
    <Loader v-if="showSpinner" />

    <template v-else>
      <Carousel />
      <HomeFirstCardContainer />
      <HomeSecondContainer />
      <HomeThirdContainer />
    </template>
  </main>
</template>
