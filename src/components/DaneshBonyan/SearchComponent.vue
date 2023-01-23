<script setup lang="ts"></script>

<template>
  <div shadow="#ccc lg" rounded-3xl w-full h-full flex-center-row px-2>
    <div break-all w-full bg-transparent h="70%" max-h-15>
      <input
        type="text"
        text="!dark sm"
        class="placeholder-text-light placeholder-text-xs focus:border-1 focus:border-#ccc outline-none rounded-tr-3xl rounded-br-3xl"
        placeholder="جستجو بر اساس حوزه فناوری ..."
        block
        pr-3
        w-full
        h-full
      />
    </div>
    <span
      bg-blue
      w-15
      h-15
      rounded-tl-3xl
      rounded-bl-3xl
      h="70%"
      max-h-15
      flex-center-row
    >
      <div class="i-ic:outline-search text-2xl text-white" />
    </span>
  </div>
</template>

<!-- TODO => ADD JS TO THIS PAGE -->
