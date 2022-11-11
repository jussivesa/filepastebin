FROM node:16-alpine
WORKDIR /app

EXPOSE 3000

RUN cd /app
COPY . .

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
