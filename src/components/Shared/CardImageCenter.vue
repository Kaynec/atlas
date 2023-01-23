<script setup lang="ts">
import { IEvent } from "@/types";

const { item } = defineProps<{
  item: IEvent;
}>();

const parsedDate = item.start_date.replace("T", " ").replace("Z", "");

const dateofYear = new Intl.DateTimeFormat("fa-Fa").format(
  new Date(parsedDate.split(" ")[0])
);
let timeofYear = new Intl.DateTimeFormat("fa-Fa", {
  hour: "2-digit",
  hourCycle: "h24",
}).format(new Date(`${parsedDate.split(" ")[0]} ${parsedDate.split(" ")[1]}`));
</script>

<template>
  <div
    class="bg-white shadow-xl border-0.1px border-#65656520 p-3 rounded-2xl relative mt-25"
  >
    <div mx-auto flex-center-row max-h-25>
      <img
        :src="item.image"
        alt="image src"
        width="150"
        height="150"
        w-45
        h-45
        object-cover
        rounded-full
        translate-y="-15"
      />
    </div>
    <!-- <FlexBetween label="نوع رویداد" value="دوره آموزشی" /> -->
    <FlexBetween label="عنوان رویداد" :value="item.title" />
    <FlexBetween label=" تاریخ برگزاری" :value="dateofYear" />
    <FlexBetween border="none" label="ساعت برگزاری" :value="timeofYear" />
    <!-- <FlexBetween label=" محل برگزاری" value="تهران" /> -->
  </div>
</template>

<style>
.shadow-3xl {
  box-shadow: 1px 4px 14px rgba(101, 101, 101, 0.25);
}
</style>
