import axios from 'axios';

// 设置单独的 API 配置
const api = axios.create({
  baseURL: 'https://your-api-url.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 示例：封装 API 请求
export const fetchUserData = async (userId: string) => {
  try {
    const response = await api.get(`users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
