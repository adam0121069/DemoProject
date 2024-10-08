<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';
import { NModal } from 'naive-ui';

// 接收 prop
const props = defineProps<{
    showModal: boolean;  // 自定义的 `v-model` 绑定名称
}>();

// 声明 emit 事件
const emit = defineEmits<{
    (event: 'set_showModal', value: boolean): void;
}>();

// 控制模态框显示状态的响应式变量
const localShowModal = ref(props.showModal);

// 监听 prop 的变化
watch(() => props.showModal, (newValue) => {
    localShowModal.value = newValue;
});

// 监听 localShowModal 的变化并通知父组件
watch(localShowModal, (newValue) => {
    emit('set_showModal', newValue);
});

// 在模态框关闭动画完成后触发事件
const handleAfterLeave = () => {
    localShowModal.value = false; // 触发 watcher 来同步更新父组件
};
</script>


<template>
    <n-modal v-model:show="localShowModal" @after-leave="handleAfterLeave">
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company" />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free
                        trial</a>
                </p>
            </div>
        </div>
    </n-modal>
</template>
