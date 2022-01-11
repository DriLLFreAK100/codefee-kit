FROM node:17-alpine3.12

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
CMD ["npm", "run", "storybook:docker"]