export type Expense = { id: string; amount: number; date: string; category: string; memo: string; createdAt: string; updatedAt: string }
export type ExpenseInput = Pick<Expense, 'amount' | 'date' | 'category' | 'memo'>
export type AppSettings = { budgets: Record<string, number>; categories: string[]; warningThresholds: { caution: number; warning: number } }

export const defaultCategories = ['食費', '交通費', '日用品', '娯楽', '旅行', '衣服', '固定費', 'その他']
export const defaultSettings: AppSettings = { budgets: {}, categories: defaultCategories, warningThresholds: { caution: 70, warning: 90 } }
