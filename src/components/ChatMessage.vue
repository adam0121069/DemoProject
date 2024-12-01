<script setup lang="ts">
defineProps({
    type: { type: String, required: true }, // 'service' 或 'inquiry'
    message: { type: String, required: true }, // 消息內容
});
</script>

<template>
    <div :class="[
        'flex items-end',
        type === 'service' ? 'flex-row' : 'flex-row-reverse'
    ]">
        <div class="rounded bg-blue-500 w-8 aspect-square p-1.5" :class="type === 'service' ? '' : 'flex-row-reverse'">
            <slot name="icon">
                <!-- 根據 type 顯示不同的圖標 -->
                <svg v-if="type === 'service'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        <circle cx="7" cy="3" r="1" />
                        <circle cx="17" cy="3" r="1" />
                        <path
                            d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7" />
                    </g>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <line x1="12" y1="12" x2="12" y2="18" />
                        <line x1="12" y1="12" x2="18" y2="12" />
                    </g>
                </svg>
            </slot>
        </div>
        <p class="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm" :class="type === 'service' ? '' : 'bg-blue-100'">
            {{ message }}
        </p>
    </div>
</template>
