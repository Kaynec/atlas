<script setup lang="ts">
import { INews } from "@/types";

const { item } = defineProps<{
  item: INews;
}>();
console.log(item);
</script>

<template>
  <div v-motion-slide-visible-left class="card flex-center-column gap-6">
    <img :src="item.image" width="250" height="200" w-full alt="first item" />
    <h1 font-700>{{ item.title }}</h1>
    <p text-xs font-400>
      {{ item.description }}
    </p>
    <a font-700 text-sm flex-center-row class="btn w-35 btn-primary">
      مشاهده
    </a>
  </div>
</template>
