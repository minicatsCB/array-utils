FROM node:18
RUN npm install -g http-server
WORKDIR /usr/src/app
ARG VITE_SERVER_HOST
ENV VITE_SERVER_HOST=$VITE_SERVER_HOST
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["http-server", "dist"]
