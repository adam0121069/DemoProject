<script setup lang="ts">
import { ref } from 'vue'
import LoginView from '@/components/Login.vue'

const isModalVisible = ref(false);

// 独立的打开模态框的方法
const openModal = () => {
    isModalVisible.value = true;
}
</script>

<template>
  <nav class="flex flex-wrap items-center justify-between p-3">

    <div class="text-xl">Demo Website</div>
    <div class="flex md:hidden">
      <button id="hamburger">
        <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40"
          height="40" />
        <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40"
          height="40" />
      </button>
    </div>
    <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
      <a href="#home" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</a>
      <a href="#services" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</a>
      <a href="#aboutus" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</a>
      <a href="#Login" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none" @click="openModal">Login</a>
    </div>

    <div class="relative w-full h-[320px]" id="home">
      <div class="absolute inset-0 opacity-60">
        <img
          src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background Image" class="object-cover object-center w-full h-full" />
      </div>
      <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between text-white">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Tailwind CSS</h1>
          <p class="font-regular text-xl mb-8 mt-4"> vite + vue3</p>
          <a href="#contactUs"
            class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200">Contact
            Us</a>
        </div>
      </div>
    </div>
  </nav>
  <LoginView v-model:showModal="isModalVisible" />
</template>
