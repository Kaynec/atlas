<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <div
    class="bg-white shadow-xl border-0.1px border-#65656520 p-3 rounded-2xl relative mt-25"
  >
    <div mx-auto flex-center-row max-h-25>
      <img
        :src="src"
        alt="image src"
        width="150"
        height="150"
        w-45
        translate-y="-15"
      />
    </div>
    <FlexBetween label="نوع رویداد" value="دوره آموزشی" />
    <FlexBetween label=" تاریخ برگزاری" value="1401/09/12" />
    <FlexBetween label=" محل برگزاری" value="تهران" />
    <FlexBetween label="عنوان رویداد" value="مغز متفکر" />
    <FlexBetween border="none" label="ساعت برگزاری" value="12:00 ظهر" />
  </div>
</template>

<style>
.shadow-3xl {
  box-shadow: 1px 4px 14px rgba(101, 101, 101, 0.25);
}
</style>
