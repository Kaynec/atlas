<template>
  <Loader v-if="state.loading" />
  <main id="app-wrapper" flex flex-col v-else>
    <Header />
    <RouterView />
    <TheFooter />
  </main>
</template>

<script lang="ts" setup>
import { state } from "./composables/loading";
</script>

<style>
@font-face {
  font-family: "IranYekan";
  src: url("./assets/Qs_Iranyekan.ttf") format("truetype");
  font-style: "normal";
  font-weight: 500;
}

@font-face {
  font-family: "IranYekan";
  src: url("./assets/Qs_Iranyekan-light.ttf") format("truetype");
  font-style: "normal";
  font-weight: 400;
}

@font-face {
  font-family: "IranYekan";
  src: url("./assets/Qs_Iranyekan-medium.ttf") format("truetype");
  font-style: "normal";
  font-weight: 600;
}

@font-face {
  font-family: "IranYekan";
  src: url("./assets/Qs_Iranyekan-bold.ttf") format("truetype");
  font-style: "normal";
  font-weight: 700;
}

#app-wrapper {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  font-family: "IranYekan";
  direction: rtl;
  position: relative;
  justify-content: space-between;
}

* {
  margin: 0;
  padding: 0;
}
</style>
