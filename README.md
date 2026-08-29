# カード支出

カード払いの使いすぎを防ぐ、端末内保存の個人用支出管理アプリです。支出履歴は IndexedDB、設定は localStorage に保存され、外部サービスへデータを送信しません。

## 開発

```bash
npm install
npm run dev
npm run test
npm run build
```

## GitHub Pages

リポジトリの Settings → Pages → Build and deployment で GitHub Actions を選択してください。`main` への push がデプロイを実行します。
