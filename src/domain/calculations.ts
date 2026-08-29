import type { Expense } from './types'

export const monthKey = (date: Date) => date.toISOString().slice(0, 7)
export const todayKey = () => new Date().toISOString().slice(0, 10)
export const yen = (amount: number) => new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(amount)
export const total = (items: Expense[]) => items.reduce((sum, item) => sum + item.amount, 0)
export const categoryTotals = (items: Expense[]) => Object.entries(items.reduce<Record<string, number>>((all, item) => ({ ...all, [item.category]: (all[item.category] ?? 0) + item.amount }), {})).sort((a, b) => b[1] - a[1])
export const warningFor = (spent: number, budget: number, caution: number, warning: number) => {
  if (budget <= 0) return null
  const rate = spent / budget * 100
  if (rate >= 100) return { label: '予算超過', tone: 'danger' as const }
  if (rate >= warning) return { label: '警告：予算残りわずか', tone: 'danger' as const }
  if (rate >= caution) return { label: '注意：予算の消化が進んでいます', tone: 'caution' as const }
  return null
}
