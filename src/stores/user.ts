import { defineStore } from 'pinia';
import { ref } from 'vue';

interface LoginPayload {
    id: string;
    name: string;
    bu: string;
}

export const useUserStore = defineStore('user', () => {
    // 定义状态 (state)
    const id = ref('');
    const name = ref('');
    const bu = ref('');
    const loggedIn = ref(false);

    // 定义方法 (actions)
    function login(payload: LoginPayload) {
        id.value = payload.id;
        name.value = payload.name;
        bu.value = payload.bu;
        loggedIn.value = true;
    }

    function logout() {
        id.value = '';
        name.value = '';
        bu.value = '';
        loggedIn.value = false;
    }

    // 返回状态、计算属性和方法
    return {
        id,
        name,
        bu,
        loggedIn,
        login,
        logout,
    };
});
