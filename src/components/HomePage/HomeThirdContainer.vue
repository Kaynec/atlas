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
    >
      <h1 font-700 text-lg>آخرین رویداد ها</h1>
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
          <div
            v-motion-slide-visible-left
            class="card flex-center-column gap-6"
          >
            <img
              src="@/assets/img/event.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>رویداد شماره 1</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a font-700 text-sm flex-center-row class="btn w-35 btn-primary">
              مشاهده
            </a>
          </div>
          <div
            v-motion-slide-visible-left
            class="card flex-center-column gap-6"
          >
            <img
              src="@/assets/img/event.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>رویداد شماره 1</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a font-700 text-sm flex-center-row class="btn w-35 btn-primary">
              مشاهده
            </a>
          </div>
          <div
            v-motion-slide-visible-left
            class="card flex-center-column gap-6"
          >
            <img
              src="@/assets/img/event.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>رویداد شماره 1</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a font-700 text-sm flex-center-row class="btn w-35 btn-primary">
              مشاهده
            </a>
          </div>
          <!-- Center Element -->
          <!-- We Initially Focus On This Element -->
          <div
            v-motion-slide-visible-left
            class="card flex-center-column gap-6"
          >
            <img
              src="@/assets/img/event.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>رویداد شماره 1</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a font-700 text-sm flex-center-row class="btn w-35 btn-primary">
              مشاهده
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
