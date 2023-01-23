<script setup lang="ts">
defineProps<{
  label: string;
  borderBottom?: number;
}>();
</script>

<template>
  <h1
    text-primary
    font-700
    text-2xl
    border-b="3"
    pb-2
    border-primary
    whitespace-nowrap
    w-fit
  >
    {{ label }}
  </h1>
</template>
