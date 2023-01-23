<template>
  <div
    class="btns mx-auto flex-center-row gap-5 my-3 absolute bottom-0 w-55 z-9999 mx-auto mx-auto left-6/12 absolute left-1/2 transform -translate-x-1/2"
  >
    <button
      class="btn rounded text-2xl bg-primary border-0 aspect-1"
      @click="swiper.slideNext()"
    >
      <span class="i-fa6-solid:angle-right" />
    </button>
    <button
      class="btn rounded text-2xl bg-primary border-0 aspect-1"
      @click="swiper.slidePrev()"
    >
      <span class="i-fa6-solid:angle-left" />
    </button>
  </div>
</template>

<script setup>
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();
</script>
