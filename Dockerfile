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

# The image used to inline its own server block here, which meant the committed
# nginx.conf was never the config that actually ran: the inlined copy kept the
# blanket `try_files $uri $uri/ /index.html` fallback, so the container answered
# /robots.txt, /sitemap.xml and every unknown path with the app shell and a 200.
# One config, checked in, is now the only one.
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
