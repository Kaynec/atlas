<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
defineProps<{
  label: string;
  description: string;
  link?: string;
  img: string;
}>();
console.log("ss");
</script>

<template>
  <swiper-slide class="card gap-3">
    <img
      :src="img"
      width="250"
      height="200"
      w-full
      alt="first item"
      max-w="100%"
    />
    <h1 text-dark font-700>{{ label }}</h1>
    <p text-light text-xs font-400>
      {{ description }}
    </p>
    <a text-primary font-700 text-sm flex-center-row>
      اطلاعات بیشتر
      <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
    </a>
  </swiper-slide>
</template>
