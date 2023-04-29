FROM node:18 AS builder

WORKDIR /usr/local/app

# 最初に package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# 残りのファイルをコピー
COPY . .

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=builder /usr/local/app/build /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]
