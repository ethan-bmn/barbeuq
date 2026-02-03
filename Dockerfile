# --------------------
# Build stage
# --------------------
FROM oven/bun:1 AS build

WORKDIR /app

# Copy dependency files only
COPY package.json bun.lockb ./

# Install deps (do NOT ignore scripts for Nuxt)
RUN bun install --frozen-lockfile

# Copy project files (node_modules excluded via .dockerignore)
COPY . .

# Build Nuxt
RUN bun run build


# --------------------
# Runtime stage
# --------------------
FROM oven/bun:1 AS runner

WORKDIR /app

# Copy built output only
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./

EXPOSE 3000

# Nuxt 3 production entry
CMD ["bun", ".output/server/index.mjs"]
