<script setup lang="ts">
// TODO ADD ACTIVE CLASS
const showMobileHeader = ref(false);
//
</script>

<template>
  <!-- This This On Large Desplays -->
  <header
    w-full
    flex-center-column
    min-h-35
    mb-4
    container-custom
    mx-auto
    gap-2
    pt-10
    px-2
    hidden
    md="flex flex-col"
  >
    <div flex gap-3 items-center font-500>
      <img src="@/assets/img/logo.png" alt="logo" />
      <h1>لوگوی مجموعه</h1>
    </div>
    <nav w-full>
      <ul
        flex
        w-full
        container-custom
        mx-auto
        justify-center
        gap-10
        items-center
        text-dark
      >
        <li>
          <router-link
            :to="{
              name: 'Home',
            }"
            class="text-lg font-500"
            exact-active-class="!text-primary"
            transition-all
            transition-350
          >
            صفحه اصلی
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'RoshdCenter',
            }"
            class="text-lg font-500"
            exact-active-class="!text-primary"
            transition-all
            transition-350
          >
            اطلس مراکز رشد
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'DaneshBonyan',
            }"
            class="text-lg font-500"
            exact-active-class="!text-primary"
            transition-all
            transition-350
          >
            صفحه محصولات
          </router-link>
        </li>
        <li flex items-center gap-1>
          <MenuBar
            :links="[
              {
                name: 'نانو',
                path: 'DaneshBonyan',
              },
              {
                name: 'علوم شناختی',
                path: 'DaneshBonyan',
              },
              {
                name: 'فناوری اطلاعات (it)',
                path: 'DaneshBonyan',
              },
            ]"
          />

          <router-link
            :to="{
              name: 'DaneshBonyan',
            }"
            class="text-xs font-500"
            exact-active-class="!text-primary"
            transition-all
            transition-350
          >
            دسته بندی محصوالت
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <!--  -->

  <!--  -->

  <header v-auto-animate sm="hidden" class="flex justify-between p-2" relative>
    <!-- <img src="@/assets/img/logo.png" alt="logo" /> -->
    <i
      class="i-system-uicons:menu-hamburger mt-2 btn text-light"
      @click="showMobileHeader = !showMobileHeader"
    />
    <!-- Absolute Positioned element That Only Runs When Clickec On Hamburger -->
    <div
      class="fixed left-0 top-0 bg-primary w-85vw text-white min-h-80vh z-999"
      v-if="showMobileHeader"
    >
      <nav>
        <ul
          flex
          flex-col
          w-full
          container-custom
          mx-auto
          justify-center
          items-center
          gap-10
          sm:hidden
        >
          <li>
            <img src="@/assets/img/logo.png" alt="logo" />
          </li>

          <li>
            <router-link
              :to="{
                name: 'Home',
              }"
              class="text-xs font-500"
              exact-active-class="text-white b-b-red b-b-1 pb-2 text-right"
              transition-all
              transition-350
            >
              صفحه اصلی
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'Home',
              }"
              class="text-xs font-500"
              exact-active-class="text-white b-b-red b-b-1 pb-2 text-right"
              transition-all
              transition-350
            >
              اطلس مراکز رشد
            </router-link>
          </li>
          <li flex items-center gap-1>
            <MenuBar
              :links="[
                {
                  name: 'نانو',
                  path: 'DaneshBonyan',
                },
                {
                  name: 'علوم شناختی',
                  path: 'DaneshBonyan',
                },
                {
                  name: 'فناوری اطلاعات (it)',
                  path: 'DaneshBonyan',
                },
              ]"
            />

            <router-link
              :to="{
                name: 'DaneshBonyan',
              }"
              class="text-xs font-500"
              exact-active-class="!text-primary"
              transition-all
              transition-350
            >
              دسته بندی محصوالت
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
