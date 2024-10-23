# Используем официальный образ Node.js для запуска React
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости, включая Vite
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Открываем порт 5173
EXPOSE 5173

# Запускаем dev-сервер с помощью Vite
CMD ["npm", "run", "dev"]
