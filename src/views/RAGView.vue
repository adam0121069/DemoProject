<script setup lang="ts">
import { ref } from 'vue';
import ChatMessage from '@/components/ChatMessage.vue';

const messages = ref([
  { type: "service", message: "您好，有什麼可以幫你服務嗎?" },
  { type: "inquiry", message: "您好，我想請問關於一下問題" },
]);

const userInput = ref("");

// 提交新消息的方法
const submitMessage = () => {
  if (userInput.value.trim() !== "") {
    messages.value.push({
      type: "inquiry", // 假设新增的消息类型是 'inquiry'
      message: userInput.value,
    });

    messages.value.push({
      type: "service", // 假设新增的消息类型是 'inquiry'
      message: "Get API Response",
    });

    userInput.value = ""; // 清空输入框
  }
};

</script>

<template>

  <div class="flex items-center justify-center w-full">
    <div class="m-2 w-full md:w-1/2 lg:3/4 border flex flex-col rounded-t-xl">
      <header class="w-full bg-blue-500 flex justify-between px-2 py-1 rounded-t-lg items-center">
        <h2 class="text-sm font-semibold text-white flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-6" viewBox="0 0 24 24">
            <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              color="#ffffff">
              <path d="M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4" />
              <circle cx="7" cy="3" r="1" />
              <circle cx="17" cy="3" r="1" />
              <path
                d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7" />
              <path d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15" />
            </g>
          </svg>
          Chat Service

        </h2>
        <button class="text-white w-8 h-8 p-1 rounded-full hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414" />
          </svg>
        </button>
      </header>


      <div class="flex flex-col gap-4 p-2 select-none">
        <ChatMessage v-for="(msg, index) in messages" :key="index" :type="msg.type" :message="msg.message" />
      </div>

      <div class="flex items-center my-2 mx-1">
        <textarea id="chat" rows="2" class="bg-white block mx-4 p-2.5 w-full text-sm
          text-gray-900
         rounded-lg border
          border-gray-300 focus:ring-blue-500 focus:border-blue-500
         dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="userInput"
          placeholder="Your message...">
        </textarea>
        <button @click="submitMessage"
          class="flex justify-center items-center aspect-square h-9 bg-blue-500 p-2 text-white rounded-full cursor-pointer hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
