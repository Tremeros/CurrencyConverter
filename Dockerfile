FROM node:10.12.0
WORKDIR /app

COPY . /app
RUN npm install
COPY . .
CMD npm start
EXPOSE 3000