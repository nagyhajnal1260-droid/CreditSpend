import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 相対パスにより project site / user site のどちらの GitHub Pages でも動作します。
  base: './',
  plugins: [react()],
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts' },
})
