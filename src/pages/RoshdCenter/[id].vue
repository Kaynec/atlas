<script setup lang="ts">
import imgOne from "@/assets/img/card-img/1.png";
import imgTwo from "@/assets/img/card-img/2.png";
import imgThree from "@/assets/img/card-img/3.png";
import { breakpointsTailwind } from "@vueuse/core";
import { SwiperSlide } from "swiper/vue";

const breakPoints = useBreakpoints(breakpointsTailwind);

const breakPoint = computed(() => {
  if (breakPoints.lg.value) return 3;
  else if (breakPoints.md.value) return 2;
  else return 1;
});
</script>

<template>
  <main grow>
    <div class="text flex-center-column pt-5">
      <TextWithLightBottomBorder label="مرکز رشد تهران شمال" />
    </div>
    <!-- Information Section -->
    <div grid grid-cols-1 lg:grid-cols-2 container-custom mx-auto py-10>
      <!-- First Div -->
      <div max-w-full flex-center-row lg>
        <img
          src="@/assets/img/person.png"
          alt="person"
          width="300"
          height="300"
          drop-shadow-xl
        />
      </div>
      <!-- Second Div  -->
      <div>
        <h1 text="dark" font="700" border="b-1 secondary" pb="1" mb-3 w="25">
          اطلاعات مدیر
        </h1>
        <FlexBetween label="نام" value="محمد حسین " />
        <FlexBetween label="نام خانوادگی" value="قربانی پور" />
        <FlexBetween label="رشته تحصیلی" value="مهندسی صنعتی " />
        <FlexBetween label="رشته تحصیلی" value="کارشناسی ارشد صنعتی " />
      </div>
    </div>
    <!--  -->
    <div container-custom mx-auto>
      <TextWithLightBottomBorder
        label="رویداد های فناورانه "
        border-b="1 secondary"
        text="!dark lg "
        font="700"
      />
      <!--  -->

      <div px-3>
        <CustomCarousel
          class="flex"
          :slides-per-view="breakPoint"
          ref="carousel"
          :customNavigation="true"
        >
          <swiper-slide>
            <CardImageCenter :src="imgOne" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgTwo" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgThree" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgOne" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgTwo" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgThree" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgOne" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgTwo" />
          </swiper-slide>

          <swiper-slide>
            <CardImageCenter :src="imgThree" />
          </swiper-slide>
        </CustomCarousel>
      </div>

      <!--  -->
    </div>
    <div container-custom mx-auto>
      <TextWithLightBottomBorder
        label="شرکت ها یا استارتاپ ها"
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
        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgOne" />
          <CardWithImageTop :src="imgOne" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgTwo" />
          <CardWithImageTop :src="imgTwo" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgThree" />
          <CardWithImageTop :src="imgThree" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgOne" />
          <CardWithImageTop :src="imgOne" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgTwo" />
          <CardWithImageTop :src="imgTwo" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgThree" />
          <CardWithImageTop :src="imgThree" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgOne" />
          <CardWithImageTop :src="imgOne" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgTwo" />
          <CardWithImageTop :src="imgTwo" />
        </swiper-slide>

        <swiper-slide gap-3 flex flex-col>
          <CardWithImageTop :src="imgThree" />
          <CardWithImageTop :src="imgThree" />
        </swiper-slide>
      </CustomCarousel>
    </div>
    <!--  -->

    <div container-custom mx-auto>
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
    </div>
  </main>
</template>
