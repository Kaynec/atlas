<script setup lang="ts">
defineProps<{
  label: string;
  description: string;
  link?: string;
  img: string;
}>();
</script>

<template>
  <!--  -->
  <img :src="img" :alt="label" max-w="full" />
  <!--  -->
  <h1 text-dark font-700>{{ label }}</h1>
  <p text-light text-xs font-400>
    {{ description }}
  </p>
  <a text-primary font-700 text-sm flex-center-row>
    اطلاعات بیشتر
    <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
  </a>
</template>
