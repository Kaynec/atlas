<style>
.swiper-pagination-bullet-active {
  background-color: #fff !important;
}
</style>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { SwiperSlide } from "swiper/vue";
import { GrowthCenter } from "@/types";

const { data: items, isLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(
      "growth-center/recent-course-list//"
    ).json();
    return data.value as GrowthCenter[];
  },
  queryKey: ["recent-course"],
});
</script>
<template>
  <CustomCarousel
    :slides-per-view="1"
    :customArrows="true"
    :pagination="{ clickable: true }"
    v-loading.lock="isLoading"
  >
    <swiper-slide v-for="item in items" :key="item.id" class="relative w-full">
      <img :src="item.poster" class="w-full" object-cover />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      ></div>
    </swiper-slide>
  </CustomCarousel>
</template>
