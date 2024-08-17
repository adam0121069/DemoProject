# 使用 Node.js 作为构建阶段的基础镜像
FROM node:18 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目源代码
COPY . .

# 构建应用
RUN npm run build

# 使用 nginx 作为生产阶段的基础镜像
FROM nginx:stable-alpine AS production-stage

# 复制构建输出到 nginx 的默认目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]