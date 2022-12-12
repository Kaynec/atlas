<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <h1 text-blue font-700 text-2xl border-b-3 pb-2 border-blue>
    {{ label }}
  </h1>
</template>
