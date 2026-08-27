# ── Build Stage ──
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Ordering-app origin. Vite inlines VITE_* at build time, so this has to be set
# before `npm run build`, not at container start:
#   docker build --build-arg VITE_ORDER_APP_URL=https://food.mangaale.com .
# Written to .env.local (which outranks the committed .env in Vite's env
# precedence) and only when actually passed, so an unset arg cannot blank the
# value that .env already provides.
ARG VITE_ORDER_APP_URL
RUN if [ -n "$VITE_ORDER_APP_URL" ]; then \
      printf '\nVITE_ORDER_APP_URL=%s\n' "$VITE_ORDER_APP_URL" >> .env.local; \
    fi \
 && npm run build

# ── Production Stage ──
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# SPA fallback: route all paths to index.html
RUN printf 'server {\n\
  listen 80;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / {\n\
    try_files $uri $uri/ /index.html;\n\
  }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
