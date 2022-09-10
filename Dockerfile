FROM node:18-alpine AS base
WORKDIR /app
RUN apk add --update --no-cache python3 alpine-sdk && ln -sf python3 /usr/bin/python
RUN corepack enable && corepack prepare pnpm@7.11.0 --activate

FROM base AS build
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install --frozen-lockfile
COPY src src
RUN pnpm build

FROM base AS production
COPY package.json pnpm-lock.yaml ./
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules/ ./node_modules/
EXPOSE 3000
ENTRYPOINT [ "pnpm", "start" ]
