<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div flex justify-between border-b-1px border="#ddd" text="base" py="4">
    <span text="light sm" font="500"> {{ label }} </span>
    <span text="dark" font="700"> {{ value }} </span>
  </div>
</template>
