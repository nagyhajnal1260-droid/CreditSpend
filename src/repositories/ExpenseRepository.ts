import type { Expense, ExpenseInput } from '../domain/types'

export interface ExpenseRepository { listByMonth(month: string): Promise<Expense[]>; save(input: ExpenseInput, id?: string): Promise<Expense>; remove(id: string): Promise<void> }
