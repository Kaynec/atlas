<script setup lang="ts">
const { modelValue, label } = defineModel<{
  modelValue: string
  label: string
}>()
</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text text-dark text-1rem font-600"> {{ label }} </span>
    </label>

    <input
      :id="modelValue" v-model="modelValue" type="text" v-bind="$attrs" p="x-4 y-2" w="275px" text="center"
      bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none"
    >
  </div>
</template>
