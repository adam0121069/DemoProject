<script setup lang="ts">
import { RouterView } from 'vue-router'

import { NModalProvider } from 'naive-ui';

import HeaderView from '@/components/Header.vue';
import LeftSide from '@/components/LeftSide.vue';
import FooterView from '@/components/Footer.vue';

</script>

<template>
  <n-modal-provider>
    <div class="flex flex-col min-h-screen">
      <HeaderView />

      <LeftSide />

      <div class="flex flex-1">


        <main class="flex-grow bg-gray-100 p-4">
          <p class="text-lg">Body Content</p>
          <RouterView />
        </main>
      </div>

      <FooterView class="bg-gray-800 text-white p-4 mt-auto" />
    </div>
  </n-modal-provider>
</template>
