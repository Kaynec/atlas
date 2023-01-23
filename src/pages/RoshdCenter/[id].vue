<script setup lang="ts">
import imgOne from "@/assets/img/card-img/1.png";
import imgTwo from "@/assets/img/card-img/2.png";
import imgThree from "@/assets/img/card-img/3.png";
import { GrowthCenter, ICore, ICourse, IEvent, INews } from "@/types";
import { useQuery } from "@tanstack/vue-query";
import { breakpointsTailwind } from "@vueuse/core";
import { SwiperSlide } from "swiper/vue";

const route = useRoute();

const id = route.params.id;

const breakPoints = useBreakpoints(breakpointsTailwind);

const breakPoint = computed(() => {
  if (breakPoints.lg.value) return 3;
  else if (breakPoints.md.value) return 2;
  else return 1;
});
//
const { data: RoshdCenter, isLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(
      `growth-center/center-user/${id}/`
    ).json();
    return data.value as GrowthCenter;
  },
  queryKey: ["growth-center", id],
});
const { data: courses, isLoading: courseLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(`growth-center/course/${id}/`).json();
    return data.value as ICourse[];
  },
  queryKey: ["recent-course", id],
});
const { data: cores, isLoading: coreLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(`growth-center/core/${id}/`).json();
    return data.value as ICore[];
  },
  queryKey: ["recent-core", id],
});
const { data: news, isLoading: newsLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(`growth-center/news/${id}/`).json();
    return data.value as INews[];
  },
  queryKey: ["recent-news", id],
});
const { data: events, isLoading: eventLoading } = useQuery({
  queryFn: async () => {
    const { data } = await useMyFetch(`growth-center/events/${id}/`).json();
    return data.value as IEvent[];
  },
  queryKey: ["recent-events", id],
});
//
</script>

<template>
  <main grow>
    <div class="text flex-center-column pt-5">
      <TextWithLightBottomBorder :label="RoshdCenter?.name!" />
    </div>
    <!-- Information Section -->
    <div grid grid-cols-1 lg:grid-cols-2 container-custom mx-auto py-10>
      <!-- First Div -->
      <div max-w-full flex-center-row lg>
        <img
          :src="RoshdCenter?.manager_image!"
          alt="person"
          width="300"
          height="300"
          max-w-75
          drop-shadow-xl
          rounded-full
          object-cover
          aspect-1
        />
      </div>
      <!-- Second Div  -->
      <div>
        <h1 text="dark" font="700" border="b-1 secondary" pb="1" mb-3 w="25">
          اطلاعات مدیر
        </h1>
        <FlexBetween label="نام" :value="RoshdCenter?.manager_name!" />
      </div>
    </div>
    <!--  -->
    <div container-custom mx-auto>
      <TextWithLightBottomBorder
        label="دوره های آموزشی"
        border-b="1 secondary"
        text="!dark lg "
        font="700"
      />
      <!--  -->

      <section
        w-full
        h-fit
        container-custom
        mx-auto
        flex
        flex-col
        gap-3
        text-center
        v-loading.lock="courseLoading"
      >
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
              items-center
              justify-between
              v-for="item in courses"
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
    </div>
    <section class="bg-gray-700 w-full">
      <div container-custom mx-auto>
        <TextWithLightBottomBorder
          label="اخبار"
          border-b="1 secondary"
          text="!white lg "
          font="700"
        />
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
          <div class="w-full">
            <div
              v-loading.lock="newsLoading"
              class="container-custom mx-auto mx-auto flex flex-col gap-3 pt-4 mx-auto flex flex-col text-center"
            >
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
                  <NewsComponent
                    :item="item"
                    v-for="item in news"
                    :key="item.id"
                  />
                  <!--  -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <!--  -->

    <!--  -->
    <!--  -->
    <div container-custom mx-auto>
      <TextWithLightBottomBorder
        label="رویداد های فناورانه "
        border-b="1 secondary"
        text="!dark lg "
        font="700"
      />
      <!--  -->

      <div px-3 v-loading.lock="eventLoading">
        <CustomCarousel
          class="flex"
          :slides-per-view="breakPoint"
          ref="carousel"
          :customNavigation="true"
        >
          <swiper-slide v-for="item in events" :key="item.id">
            <CardImageCenter :item="item" />
          </swiper-slide>
        </CustomCarousel>
      </div>
    </div>
    <div container-custom mx-auto v-loading.lock="coreLoading">
      <TextWithLightBottomBorder
        label="هسته مرکز رشد"
        border-b="1 secondary"
        text="!dark lg "
        font="700"
      />

      <CustomCarousel
        class="flex"
        :slides-per-view="breakPoint"
        ref="carousel"
        :customNavigation="true"
        :space-between="50"
      >
        <swiper-slide gap-3 flex flex-col v-for="item in cores" :key="item.id">
          <CardWithImageTop :item="item" />
        </swiper-slide>
      </CustomCarousel>
    </div>
    <!--  -->

    <!-- <div container-custom mx-auto>
      <TextWithLightBottomBorder
        label="هیات علمی فناور"
        border-b="1 secondary"
        text="!dark lg "
        font="700"
      />

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-50px mt-10 mb-25"
      >
        <CardWithImageTop :coloredBorders="false" :src="imgOne" />
        <CardWithImageTop :coloredBorders="false" :src="imgTwo" />
        <CardWithImageTop :coloredBorders="false" :src="imgThree" />
        <CardWithImageTop :coloredBorders="false" :src="imgOne" />
        <CardWithImageTop :coloredBorders="false" :src="imgTwo" />
        <CardWithImageTop :coloredBorders="false" :src="imgThree" />
      </div>
    </div> -->
  </main>
</template>
