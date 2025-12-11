FROM node:20-slim

RUN apt-get update && apt-get install -y \
    libc6 \
    libstdc++6 \
    openssl \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
RUN chown -R node:node /app
USER node

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .

ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=200
ENV WATCHPACK_POLLING=true
ENV WATCHPACK_FORCE_POLLING=true
ENV NEXT_WEBPACK_USEPOLLING=true
ENV NEXT_DISABLE_TURBOPACK=1
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["npm", "run", "dev"]