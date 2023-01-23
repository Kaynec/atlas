<template>
  <div class="bg-gray-200 p-6 rounded-lg">
    <div class="flex items-center">
      <img
        src="{{Image}}"
        alt="{{Title}}"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div class="text-lg font-medium">{{ Title }}</div>
    </div>

    <div class="mt-4">
      <div class="text-gray-600">{{ Description }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      title: props.title,
      image: props.image,
      description: props.description,
    };
  },
});
</script>
