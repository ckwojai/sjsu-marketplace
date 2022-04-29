FROM node:lts-slim as dependencies
WORKDIR /my-project
COPY app/package.json app/yarn.loc[k] ./
# RUN yarn install --frozen-lockfile
RUN yarn install

FROM node:lts-slim as builder
WORKDIR /my-project
COPY app .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

FROM node:lts-slim as runner
WORKDIR /my-project
# ENV NODE_ENV production
ENV NODE_ENV development
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
