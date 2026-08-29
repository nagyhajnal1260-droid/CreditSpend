import type { Expense, ExpenseInput } from '../domain/types'
import type { ExpenseRepository } from './ExpenseRepository'

const DB_NAME = 'credit-spend-db'; const STORE = 'expenses'
const openDb = () => new Promise<IDBDatabase>((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, 1)
  request.onupgradeneeded = () => { const store = request.result.createObjectStore(STORE, { keyPath: 'id' }); store.createIndex('date', 'date') }
  request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error)
})
const requestResult = <T>(request: IDBRequest<T>) => new Promise<T>((resolve, reject) => { request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error) })

export class IndexedDbExpenseRepository implements ExpenseRepository {
  async listByMonth(month: string) { const db = await openDb(); const all = await requestResult(db.transaction(STORE).objectStore(STORE).getAll()) as Expense[]; db.close(); return all.filter(x => x.date.startsWith(month)).sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt)) }
  async save(input: ExpenseInput, id?: string) { const now = new Date().toISOString(); const db = await openDb(); const store = db.transaction(STORE, 'readwrite').objectStore(STORE); const existing = id ? await requestResult(store.get(id)) as Expense | undefined : undefined; const expense: Expense = { ...input, id: id ?? crypto.randomUUID(), createdAt: existing?.createdAt ?? now, updatedAt: now }; await requestResult(store.put(expense)); db.close(); return expense }
  async remove(id: string) { const db = await openDb(); await requestResult(db.transaction(STORE, 'readwrite').objectStore(STORE).delete(id)); db.close() }
}
