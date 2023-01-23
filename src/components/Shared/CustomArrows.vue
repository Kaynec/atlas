<script setup lang="ts">
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();
</script>

<template>
  <div w-full z-9999>
    <a @click="swiper.slidePrev()" class="custom-arrow right-5">❮</a>
    <a @click="swiper.slideNext()" class="custom-arrow left-5">❯</a>
  </div>
</template>
