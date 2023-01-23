<script lang="ts" setup>
const email = ref("");
const password = ref("");
</script>

<template>
  <main
    class="bg-[url(./src/assets/img/login-bg.png)] w-full h-full bg-red bg-no-repeat bg-center bg-cover flex-center-row"
  >
    <div
      class="card w-105 bg-base-100 shadow-xl flex flex-col items-center gap-5 py-6"
    >
      <div class="card-body items-center text-center">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h2 class="card-title text-dark">صفحه ورود</h2>
        <p text-light>لطفا مشخصات خود را وارد نمایید</p>
        <!--  -->
        <TheInput
          label="ایمیل"
          placeholder="ایمیل"
          :model-value="email"
          type="email"
        />
        <TheInput
          label="رمز عبور"
          placeholder="رمز عبور"
          :model-value="password"
          type="password"
        />
        <!--  -->
        <button class="btn btn-primary bg-primary rounded w-full">ورود</button>
        <button
          class="btn btn-primary bg-white bg-primary text-primary bg-primary btn-outline rounded w-full"
        >
          ورود با گوگل اکانت
          <i class="i-ph:google-logo-bold" />
        </button>
        <span>
          آیا قبلا ثبت نام نکردید؟

          <router-link to="signUp" class="btn-link"> ثبت نام </router-link>
        </span>
      </div>
    </div>
  </main>
</template>
