FROM node:8.9.1

COPY web.tgz /tmp

RUN mkdir -p /app
RUN tar -xvf /tmp/web.tgz -C /app
RUN rm -f /tmp/web.tgz

WORKDIR /app/web

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8080

CMD ["npm", "run", "server"]