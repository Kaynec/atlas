<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

interface State {
  center: string;
  name: string;
  id: number;
  latitude: string | number;
  longitude: string | number;
}

// Query
const { isLoading, isError, data, error } = useQuery({
  queryKey: ["states"],
  queryFn: async () => {
    const { data } = $(
      await useFetch(
        "https://iran-locations-api.vercel.app/api/v1/states"
      ).json()
    );
    return data;
  },
});
//

const search = ref("");

//
const currentCity = ref();

const showMore = ref(false);
//
const filteredStates = computed((): State[] => {
  const myArr =
    data.value?.filter((el: State) => el.name.includes(search.value)) || [];

  return showMore.value === false ? myArr.slice(0, 5) : myArr;
});

//
//
</script>
<template>
  <div shadow-xl shadow="gray-3" rounded-xl flex flex-col gap-5 p-3 py-8>
    <div flex-center-row gap-2>
      <span font-600 text-lg> شهر </span>
      <div w-40 bg-secondary rounded-lg h-2px mt-1></div>
    </div>
    <input
      type="text"
      class="appearance-none text-dark font-600 placeholder-text-light text-sm"
      placeholder="جستجو ..."
      focus:border-0
      focus:outline-0
      my-4
      v-model="search"
    />
    <progress v-if="isLoading" class="progress w-56"></progress>
    <div v-if="isError">
      {{ error }}
    </div>
    <div v-else flex flex-col gap-3 pr-3>
      <div
        v-for="state in filteredStates"
        :key="state.id"
        class="flex items-center gap-3"
      >
        <input
          type="checkbox"
          :checked="currentCity?.id === state.id"
          @change="currentCity = state"
          class="checkbox checkbox-primary checkbox-sm"
        />
        <span>
          {{ state.name }}
        </span>
      </div>
      <!-- Show More States On Click -->

      <span
        @click="showMore = !showMore"
        class="flex items-end !text-primary cursor-pointer"
        v-if="showMore === false"
      >
        بیشتر

        <i
          class="i-material-symbols:keyboard-arrow-down-rounded !text-primary"
        />
      </span>
      <span
        @click="showMore = !showMore"
        class="flex items-end !text-primary cursor-pointer"
        v-if="showMore === true"
      >
        کمتر
        <i class="i-material-symbols:keyboard-arrow-up-rounded !text-primary" />
      </span>
      <!--  -->
    </div>
  </div>
</template>
