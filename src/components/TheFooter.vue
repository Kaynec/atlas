<template>
  <!-- Footer -->
  <footer w-full class="bg" text-white bottom-0>
    <div
      container mx-auto grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-4
      xl:gap-0
      gap-7
      border-b-1px border-white pt-2
    >
      <div flex flex-col items-center md:items-start>
        <h1> لوگوی شرکت ها </h1>
        <div grid grid-cols-4 gap-3 py-4 place-items-start max-w-fit>
          <img src="@/assets/img/logos/vector-1.png" alt="vector">
          <img src="@/assets/img/logos/vector-2.png" alt="vector">
          <img src="@/assets/img/logos/vector-3.png" alt="vector">
          <img src="@/assets/img/logos/vector-4.png" alt="vector">
          <img src="@/assets/img/logos/vector-1.png" alt="vector">
          <img src="@/assets/img/logos/vector-2.png" alt="vector">
          <img src="@/assets/img/logos/vector-3.png" alt="vector">
          <img src="@/assets/img/logos/vector-4.png" alt="vector">
          <img src="@/assets/img/logos/vector-1.png" alt="vector">
          <img src="@/assets/img/logos/vector-2.png" alt="vector">
          <img src="@/assets/img/logos/vector-3.png" alt="vector">
          <img src="@/assets/img/logos/vector-4.png" alt="vector">
        </div>
      </div>
      <div grid md:grid-cols-2 col-span-2>
        <div flex flex-col gap-1>
          <span>
            لینک های مربوطه
          </span>
          <span>http://dwahdashfgdfgdfgd</span>
          <span>http://dwahdashbdfsfs</span>
          <span>http://dwahdashbdfsfsdfdfsxh</span>
          <span>http://dwahdashbdfsfsdfdfs</span>
        </div>
        <div flex flex-col gap-1 mt-6>
          <span>http://dwahdashfgdfgdfgd</span>
          <span>http://dwahdashbdfsfs</span>
          <span>http://dwahdashbdfsfsdfdfsxh</span>
          <span>http://dwahdashbdfsfsdfdfs</span>
        </div>
      </div>

      <div flex flex-col gap-2>
        <span flex gap-3>
          <img object-contain src="@/assets/img/icons/call.png" alt="call">
          (021) _77636363
        </span>
        <span flex gap-3>
          <img object-contain src="@/assets/img/icons/sms.png" alt="sms">

          FanavariCompnay@info.com
        </span>
        <span flex gap-3 whitespace-nowrap>
          <img object-contain src="@/assets/img/icons/location.png" alt="location">

          تهران ، خیابان انقلاب ، کوچه دهم ، پلاک 100 ، واحد 3
        </span>
      </div>
    </div>
    <div container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-6>
      <div>کلیه حقوق این سرویس محفوظ و متعلق به شرکت علمی فناوری می‌باشد.</div>
      <div flex gap-2>
        <img src="@/assets/img/icons/facebook.png" object-contain alt="facebook">
        <img src="@/assets/img/icons/twitter.png" object-contain alt="twitter">
        <img src="@/assets/img/icons/linkdin.png" object-contain alt="/linkdin">
        <img src="@/assets/img/icons/instagram.png" object-contain alt="instagram">
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg {
  background: linear-gradient(180deg, #004ABD 0%, #001032 100%)
}
</style>
