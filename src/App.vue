<script setup lang="ts">
import { RouterView } from 'vue-router'

import { NModalProvider } from 'naive-ui';

import HeaderView from '@/components/Header.vue';
import FooterView from '@/components/Footer.vue';

</script>

<template>
  <n-modal-provider>
    <div class="flex flex-col min-h-screen">
      <HeaderView />
      <RouterView />
      <FooterView class="bg-gray-800 text-white p-4 mt-auto" />
    </div>
  </n-modal-provider>
</template>
