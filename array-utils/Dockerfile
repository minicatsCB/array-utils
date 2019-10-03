FROM node:8.16.1
WORKDIR /array-utils
COPY . /array-utils
ENV SERVER_ADDRESS server
EXPOSE 3000
RUN npm set unsafe-perm true
CMD ["npm", "install"]
