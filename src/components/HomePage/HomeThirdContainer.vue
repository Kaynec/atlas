<script lang="ts" setup>
import { INews } from "@/types";
import { useQuery } from "@tanstack/vue-query";

//
const { data: items, isLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(
      "growth-center/recent-news-list//"
    ).json();
    return data.value as INews[];
  },
  queryKey: ["recent-news"],
});
//
</script>
<!--  -->
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
    py-4
    bg-white
  >
    <div
      class="container-custom mx-auto mx-auto flex flex-col gap-3 pt-4 mx-auto flex flex-col text-center"
      v-loading.lock="isLoading"
    >
      <h1 font-700 text-lg>آخرین اخبار</h1>
      <!--  Circle Inside It -->
      <div w-full bg-primary h-1px my-3 flex-center-row>
        <div class="relative w-4 h-4 bg-white rounded-full">
          <span
            class="w-2 h-2 rounded-full bg-primary absolute center-absolute"
          />
        </div>
      </div>
      <!--  -->
      <div overflow-visible relative transition ease-out duration-700>
        <div
          ref="items"
          relative
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4rem
          overflow-hidden
          transition
          ease-out
          duration-700
          py-15
        >
          <!--  -->
          <NewsComponent :item="item" v-for="item in items" :key="item.id" />
          <!--  -->
        </div>
      </div>
    </div>
  </section>
</template>
