<script setup lang="ts">
import imgOne from "@/assets/img/card-img/1.png";
import imgTwo from "@/assets/img/card-img/2.png";
import imgThree from "@/assets/img/card-img/3.png";
</script>
<!--  -->

<template>
  <main w-full h-full class="container-custom" mx-auto>
    <!-- Using Grid Area To Control The Layout -->
    <div class="search">
      <!-- TODO => Add Data -->
      <SearchComponent :data="data" />
    </div>
    <aside
      class="main grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mb-25 content-start"
    >
      <!--  -->
      <CardWithImageTop :coloredBorders="false" :src="imgOne" />
      <CardWithImageTop :coloredBorders="false" :src="imgTwo" />
      <CardWithImageTop :coloredBorders="false" :src="imgThree" />
      <CardWithImageTop :coloredBorders="true" :src="imgOne" />
      <CardWithImageTop :coloredBorders="true" :src="imgTwo" />
      <CardWithImageTop :coloredBorders="true" :src="imgThree" />
      <!--  -->
    </aside>
    <aside class="aside">
      <Aside :data="data" />
    </aside>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-areas:
    "search search search "
    "aside main main"
    "aside main main"
    "aside main main";
  grid-template-rows: minmax(4rem, 6rem) auto auto auto;
  grid-template-columns: minmax(12rem, 15rem) 1fr 1fr;
  gap: 2rem;
  height: fit-content;
}
.search {
  grid-area: search;
  /* background-color: green; */
}
.main {
  grid-area: main;
  /* background-color: yellow; */
}
.aside {
  grid-area: aside;
  /* background-color: blue; */
}
/*  */
@media only screen and (max-width: 768px) {
  main {
    grid-template-areas:
      "search search "
      "aside aside"
      "main main";
    grid-template-rows: minmax(4rem, 6rem) auto;
    grid-template-columns: minmax(9rem, 10rem);
    height: fit-content;
  }
}
</style>
