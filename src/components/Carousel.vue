<template>
  <div class="carousel max-w-full  ">
    <div id="slide1" ref="slides" class="carousel-item relative w-full">
      <img src="@/assets/img/carousel-4x.png" class="w-full" object-cover>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❮</a>
        <a href="#slide2" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❯</a>
      </div>
    </div>
    <div id="slide2" ref="slides" class="carousel-item relative w-full">
      <img src="@/assets/img/carousel-4x.png" class="w-full" object-cover>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❮</a>
        <a href="#slide3" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❯</a>
      </div>
    </div>
    <div id="slide3" ref="slides" class="carousel-item relative w-full">
      <img src="@/assets/img/carousel-4x.png" class="w-full" object-cover>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❮</a>
        <a href="#slide4" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❯</a>
      </div>
    </div>
    <div id="slide4" ref="slides" class="carousel-item relative w-full">
      <img src="@/assets/img/carousel-4x.png" class="w-full" object-cover>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❮</a>
        <a href="#slide1" class=" p-4 rounded bg-gradient-to-r from-#FFFFFF to-#[rgba(255,255,255,0.49)]">❯</a>
      </div>
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2 translate-y--10">
    <a href="#slide" class="bg-white outline-none border-0 w-3 h-3 !rounded-full" />
    <a href="#slide2" class="bg-white outline-none border-0 w-3 h-3 !rounded-full" />
    <a href="#slide3" class="bg-white outline-none border-0 w-3 h-3 !rounded-full" />
    <a href="#slide4" class="bg-white outline-none border-0 w-3 h-3 !rounded-full" />
  </div>
</template>

