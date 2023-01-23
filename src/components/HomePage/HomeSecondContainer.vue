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
      class="container-custom mx-auto mx-auto flex flex-col gap-3 pt-4 mx-auto flex flex-col text-center"
    >
      <h1 font-700 text-lg>آخرین سمینار های برگزار شده</h1>
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
          <div class="card flex-center-column gap-2 gap-6">
            <img
              src="@/assets/img/ceminar/item.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>سمینار دکتر رضایی</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a
              text-primary
              font-700
              text-sm
              flex-center-row
              class="btn w-35 bg-white rounded"
            >
              مشاهده
            </a>
          </div>
          <div class="card flex-center-column gap-2 gap-6">
            <img
              src="@/assets/img/ceminar/item1.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>سمینار پرورش ذهنی</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a
              text-primary
              font-700
              text-sm
              flex-center-row
              class="btn w-35 bg-white rounded"
            >
              مشاهده
            </a>
          </div>
          <div class="card flex-center-column gap-2 gap-6">
            <img
              src="@/assets/img/ceminar/item2.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>سمینار مغذ متفکر</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a
              text-primary
              font-700
              text-sm
              flex-center-row
              class="btn w-35 bg-white rounded"
            >
              مشاهده
            </a>
          </div>
          <!-- Center Element -->
          <!-- We Initially Focus On This Element -->
          <div class="card flex-center-column gap-2 gap-6">
            <img
              src="@/assets/img/ceminar/item3.png"
              width="250"
              height="200"
              w-full
              alt="first item"
            />
            <h1 font-700>سمینار زندگیتو تغییر بده</h1>
            <p text-xs font-400>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <a
              text-primary
              font-700
              text-sm
              flex-center-row
              class="btn w-35 bg-white rounded"
            >
              مشاهده
            </a>
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
