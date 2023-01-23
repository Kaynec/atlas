<script setup lang="ts">
import { GrowthCenter } from "@/types";
import { useQuery } from "@tanstack/vue-query";
import { breakpointsTailwind } from "@vueuse/core";
import { SwiperSlide } from "swiper/vue";

const breakPoints = useBreakpoints(breakpointsTailwind);

const breakPoint = computed(() => {
  if (breakPoints.lg.value) return 4;
  else if (breakPoints.md.value) return 3;
  else return 2;
});
//
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
  <section
    w-full
    h-fit
    container-custom
    mx-auto
    flex
    flex-col
    gap-3
    text-center
    v-loading.lock="isLoading"
  >
    <h1 text-dark font-700 text-lg>آخرین دوره آموزشی ها</h1>
    <!-- Div With Circle Inside It -->
    <div w-full bg-primary h-1px my-3 flex-center-row>
      <div class="relative bg-white w-4 h-4 rounded-full">
        <span
          class="w-2 h-2 rounded-full bg-primary absolute center-absolute"
        />
      </div>
    </div>
    <div p="!5">
      <custom-carousel
        :slides-per-view="breakPoint"
        container-custom
        mx-auto
        flex
        :custom-navigation="true"
      >
        <swiper-slide
          self-stretch
          h="!90"
          items-center
          justify-between
          v-for="item in items"
          :key="item.id"
          class="card gap-3"
        >
          <Course
            :label="item.name"
            :img="item.poster!"
            :description="item.description!"
          />
        </swiper-slide>
      </custom-carousel>
    </div>
  </section>
</template>
