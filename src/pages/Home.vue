<script setup lang="ts">
onMounted(() => {
  window.scrollTo({
    behavior: 'smooth',
  })
})
</script>

<template>
  <main>
    <Carousel />
    <HomeFirstCardContainer />
    <HomeSecondContainer />
    <HomeThirdContainer />
  </main>
</template>

