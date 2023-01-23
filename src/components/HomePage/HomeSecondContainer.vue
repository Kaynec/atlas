<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { breakpointsTailwind } from "@vueuse/core";
import { SwiperSlide } from "swiper/vue";
import { IEvent } from "@/types";

const breakPoints = useBreakpoints(breakpointsTailwind);

const breakPoint = computed(() => {
  if (breakPoints.lg.value) return 4;
  else if (breakPoints.md.value) return 3;
  else return 2;
});

const { data: items, isLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(
      "growth-center/recent-events-list//"
    ).json();
    return data.value as IEvent[];
  },
  queryKey: ["recent-events"],
});
</script>
<template>
  <section
    w-full
    h-fit
    h-35vh
    mx-auto
    flex
    flex-col
    gap-3
    text-center
    text-white
    py-4
    class="bg"
  >
    <div
      v-loading.lock="isLoading"
      class="container-custom mx-auto mx-auto flex flex-col gap-3 pt-4 mx-auto flex flex-col text-center"
    >
      <h1 font-700 text-lg>آخرین رویداد های برگزار شده</h1>
      <!--  Circle Inside It -->
      <div w-full bg-white h-1px my-3 flex-center-row>
        <div class="relative w-4 h-4 bg-primary rounded-full">
          <span
            class="w-2 h-2 rounded-full bg-white absolute center-absolute"
          />
        </div>
      </div>
      <!--  -->
      <div
        v-motion-slide-visible-right
        overflow-visible
        relative
        transition
        ease-out
        duration-700
      >
        <div container-custom mx-auto>
          <div px-3>
            <CustomCarousel
              class="flex"
              :slides-per-view="breakPoint"
              ref="carousel"
              :customNavigation="true"
            >
              <swiper-slide v-for="item in items" :key="item.id">
                <CardImageCenter :item="item" />
              </swiper-slide>
            </CustomCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg {
  background: linear-gradient(
      207.73deg,
      rgba(16, 106, 246, 0.93) 26.16%,
      rgba(0, 42, 107, 0.93) 82.77%
    ),
    url("@/assets/img/ceminar/bg.jpg");
}
</style>
