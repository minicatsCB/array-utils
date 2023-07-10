FROM node:18
WORKDIR /usr/src/app
COPY array-utils/  ./array-utils
COPY example-victim/ ./example-victim
WORKDIR /usr/src/app/example-victim
RUN npm run linklib
EXPOSE 5000
CMD ["npm", "run", "test"]
