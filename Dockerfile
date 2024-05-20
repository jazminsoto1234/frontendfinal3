FROM NODE:18

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN npm install -g serve
RUN npm i --production

EXPOSE 3000

CMD ["npm", "run", "serve"]