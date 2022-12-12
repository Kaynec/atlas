<script setup lang="ts">
defineProps<{
  links: {
    name: string;
    path: string;
  }[];
}>();
const target = ref();

const isDropDownOpened = ref(false);

watch(isDropDownOpened, () => console.log(isDropDownOpened.value));

onClickOutside(target, () => {
  isDropDownOpened.value = false;
});
</script>

<template>
  <div
    ref="target"
    class="dropdown dropdown-start"
    @click="isDropDownOpened = !isDropDownOpened"
  >
    <i
      v-if="!isDropDownOpened"
      tabindex="0"
      class="i-material-symbols:keyboard-arrow-down-rounded mt-2 btn"
    />
    <i
      v-else
      tabindex="0"
      class="i-material-symbols:keyboard-arrow-up-rounded mt-2 btn"
    />

    <ul
      v-if="isDropDownOpened"
      class="menu bg-base-100 w-56 absolute z-10 border-1 border-t border-gray-2 rounded-lg"
    >
      <li v-for="link in links" :key="link.name">
        <router-link
          to="home"
          class="text-xs text-dark"
          transition-all
          transition-350
          font-500
          hover="!text-blue"
        >
          <span w-2 h-2 rounded-full bg="#00A1DD" />
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
