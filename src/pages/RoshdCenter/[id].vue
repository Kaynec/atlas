<script setup lang="ts"></script>

<template>
  <main grow>
    <div class="text flex-center-column pt-5">
      <TextWithLightBottomBorder label="مرکز رشد تهران شمال" />
    </div>
    <!-- Information Section -->
    <div grid grid-cols-1 lg:grid-cols-2 container mx-auto py-10>
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
        <h1 text="dark" font="700" border="b-1 blueLight" pb="1" mb-3 w="25">
          اطلاعات مدیر
        </h1>
        <FlexBetween label="نام" value="محمد حسین " />
        <FlexBetween label="نام خانوادگی" value="قربانی پور" />
        <FlexBetween label="رشته تحصیلی" value="مهندسی صنعتی " />
        <FlexBetween label="رشته تحصیلی" value="کارشناسی ارشد صنعتی " />
      </div>
    </div>
    <!--  -->
    <div />
    <!--  -->
  </main>
</template>
