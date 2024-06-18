FROM node:18
WORKDIR /usr/src/app
# Need to copy array-utils package because example-victim installs it as a local package.
# If the package were available in the NPM registry, this step wouldn't be necessary.
COPY array-utils/  ./array-utils
COPY example-victim/ ./example-victim
WORKDIR /usr/src/app/example-victim
RUN npm run linklib
EXPOSE 5000
CMD ["npm", "run", "test"]
