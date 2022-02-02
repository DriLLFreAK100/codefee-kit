FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "storybook:docker"]