FROM node:lts

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "prod"]