<script setup lang="ts">
// TODO ADD ACTIVE CLASS
</script>

<template>
  <!-- This This On Large Desplays -->
  <header w-full hidden sm:flex-center-column min-h-35 bg-white gap-2 pt-10>
    <div flex gap-3 items-center font-500>
      <img src="@/assets/img/logo.png" alt="logo" />
      <h1>لوگوی مجموعه</h1>
    </div>
    <nav>
      <ul flex w-full container mx-auto justify-between items-center>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            صفحه اصلی
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            اطلس مراکز رشد
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            اطلس سراهای فناوری
          </router-link>
        </li>
        <li flex items-center gap-1>
          <MenuBar
            :links="[
              {
                name: 'نانو',
                path: 'home',
              },
              {
                name: 'علوم شناختی',
                path: 'home',
              },
              {
                name: 'فناوری اطلاعات (it)',
                path: 'home',
              },
            ]"
          />

          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            محصوالت فناورانه
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            شرکت های دانش بنیان
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            استارتاپ ها
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            اعضای هیات علمی فناور
          </router-link>
        </li>
        <li>
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            رویدادهای فناور
          </router-link>
        </li>
        <li flex items-center gap-1>
          <MenuBar
            :links="[
              {
                name: 'فرم ساز',
                path: 'home',
              },
              {
                name: 'جستجو',
                path: 'home',
              },
            ]"
          />
          <router-link
            to="home"
            class="text-xs font-500"
            exact-active-class="!text-blue"
            transition-all
            transition-350
          >
            امکانات
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <!--  -->

  <!--  -->

  <header display="visible " sm:hidden bg-red class="flex justify-between p-2">
    <!-- <img src="@/assets/img/logo.png" alt="logo" /> -->
    <i class="i-system-uicons:menu-hamburger mt-2 btn text-light" />
    <!-- Absolute Positioned element That Only Runs When Clickec On Hamburger -->
    <div
      class="transition-all transition-400 ease-in absolute w-65vw left-0 top-0 bg-blue z-1 text-white"
    >
      <img src="@/assets/img/logo.png" alt="logo" />
      <nav>
        <ul
          flex
          flex-col
          w-full
          container
          mx-auto
          justify-center
          items-center
          gap-10
          visible
          sm:hidden
        >
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              صفحه اصلی
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              اطلس مراکز رشد
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              اطلس سراهای فناوری
            </router-link>
          </li>
          <li flex items-center gap-1>
            <MenuBar
              :links="[
                {
                  name: 'نانو',
                  path: 'home',
                },
                {
                  name: 'علوم شناختی',
                  path: 'home',
                },
                {
                  name: 'فناوری اطلاعات (it)',
                  path: 'home',
                },
              ]"
            />

            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              محصوالت فناورانه
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              شرکت های دانش بنیان
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              استارتاپ ها
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              اعضای هیات علمی فناور
            </router-link>
          </li>
          <li>
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              رویدادهای فناور
            </router-link>
          </li>
          <li flex items-center gap-1>
            <MenuBar
              :links="[
                {
                  name: 'فرم ساز',
                  path: 'home',
                },
                {
                  name: 'جستجو',
                  path: 'home',
                },
              ]"
            />
            <router-link
              to="home"
              class="text-xs font-500"
              exact-active-class="!text-blue"
              transition-all
              transition-350
            >
              امکانات
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
