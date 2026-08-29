import { defaultSettings, type AppSettings } from '../domain/types'
const KEY = 'credit-spend-settings'
export const loadSettings = (): AppSettings => { try { return { ...defaultSettings, ...JSON.parse(localStorage.getItem(KEY) ?? '{}'), warningThresholds: { ...defaultSettings.warningThresholds, ...JSON.parse(localStorage.getItem(KEY) ?? '{}').warningThresholds } } } catch { return defaultSettings } }
export const saveSettings = (settings: AppSettings) => localStorage.setItem(KEY, JSON.stringify(settings))
