<script setup lang="ts">
const items = ref()

const center = ref()

const forward = () => {
  const width = items.value.getBoundingClientRect().width

  const left = items.value.scrollLeft + (width / 4)
  items.value.scroll({
    left,
    behavior: 'smooth',
  })
}
const backward = () => {
  const width = items.value.getBoundingClientRect().width

  const left = items.value.scrollLeft - (width / 4)

  items.value.scroll({
    left,
    behavior: 'smooth',
  })
}

onMounted(() => {
  const width = items.value.getBoundingClientRect().width
  items.value.scrollLeft -= width / 2
})
</script>

<template>
  <section w-full h-fit container mx-auto flex flex-col gap-3 text-center>
    <h1 text-dark font-700 text-lg>
      آخرین دوره آموزشی ها
    </h1>
    <!-- Div With Circle Inside It -->
    <div w-full bg-blue h-1px my-3 flex-center-row>
      <div class="relative bg-white w-4 h-4 rounded-full">
        <span
          class="
          w-2 h-2 rounded-full bg-blue absolute center-absolute
          "
        />
      </div>
    </div>
    <!--  -->
    <div v-motion-slide-visible-right overflow-visible relative transition ease-out duration-700>
      <button
        id="prev" aria-label="slide backward"
        class="absolute   z-30 left--2rem top-35% mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        @click="backward"
      >
        <svg
          class="text-blue" width="25" height="25" viewBox="0 0 8 14" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        ref="items" relative flex flex-nowrap gap-1rem overflow-hidden transition ease-out duration-700 py-15
      >
        <div class="card gap-2 min-w-24%  ">
          <img src="@/assets/img/item.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            طراحی پادکست 1
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item1.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            2 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item2.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            3 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <!-- Center Element -->
        <!-- We Initially Focus On This Element -->
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item3.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            4 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            5 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div ref="center" class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item1.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            6 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item2.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            7 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
        <div class="card gap-2 min-w-24% ">
          <img src="@/assets/img/item3.png" width="250" height="200" w-full alt="first item">
          <h1 text-dark font-700>
            8 طراحی پادکست
          </h1>
          <p text-light text-xs font-400>
            لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.
          </p>
          <a text-blue font-700 text-sm flex-center-row>
            اطلاعات بیشتر
            <i class="i-material-symbols:keyboard-arrow-down-rounded text-lg" />
          </a>
        </div>
      </div>
      <button
        id="next" aria-label="slide forward"
        class="absolute z-30 right--4rem top-35% mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        @click="forward"
      >
        <svg
          class="text-blue" width="25" height="25" viewBox="0 0 8 14" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
