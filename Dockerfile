FROM node
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["node","app.js"]