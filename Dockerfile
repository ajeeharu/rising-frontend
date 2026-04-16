FROM node:22-slim

WORKDIR /app

# package.json をコピーしてインストール
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 全ファイルをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--host"]