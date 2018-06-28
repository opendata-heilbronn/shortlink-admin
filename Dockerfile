FROM nginx
WORKDIR /usr/share/nginx/html
COPY dist/shortlink-admin .

