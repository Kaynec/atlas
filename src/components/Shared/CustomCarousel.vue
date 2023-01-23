<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="15"
    mt-10
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="{ '!pb-20': customNavigation }"
  >
    <slot></slot>
    <!--  -->
    <CustomNavigation v-if="customNavigation" />
    <CustomArrows v-if="customArrows" />
    <!--  -->
  </swiper>
</template>
<script setup lang="ts">
//

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles

const onSwiper = (swiper) => {};
const onSlideChange = () => {};

const modules = [Navigation, Pagination];

defineProps<{
  customNavigation?: boolean;
  customArrows?: boolean;
}>();
</script>
