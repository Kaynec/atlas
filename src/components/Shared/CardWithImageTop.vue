<script setup lang="ts">
import { ICore } from "@/types";

const { item, coloredBorders = true } = defineProps<{
  coloredBorders?: boolean;
  item: ICore;
}>();
console.log(item);
</script>

<template>
  <div
    class="grid grid-cols-3 min-h-55 px-2 bg-white rounded-xl shadow-xl items-center justify-center border-0.1px border-#ddd rounded-10px text-sm max-h-45"
    :class="{ 'colored-borders': coloredBorders }"
  >
    <div h-full p-3 flex items-center>
      <img
        :src="item.image"
        alt="card img"
        width="120"
        height="120"
        rounded-full
        aspect-1
      />
    </div>
    <div class="flex flex-col gap-5">
      <span> موسس : </span>
      <span> عنوان هسته : </span>
      <span> توضیحات کوتاه : </span>
    </div>
    <div class="flex flex-col gap-5">
      <span font="700"> {{ item.founder }} </span>
      <span font="700"> {{ item.name }} </span>
      <span font="700">
        {{ item.description?.replace(/^(.{35}[^\s]*).*/, "$1") }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.colored-borders {
  position: relative;
}
.colored-borders::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 90px;
  border-top: 3px solid #0094ff;
  border-right: 3px solid #0094ff;
  border-top-right-radius: 10px;
}
.colored-borders::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 90px;
  border-bottom: 3px solid #0094ff;
  border-left: 3px solid #0094ff;
  border-bottom-left-radius: 10px;
}
</style>
