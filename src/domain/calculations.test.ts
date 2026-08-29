import { describe, expect, it } from 'vitest'
import { total, warningFor } from './calculations'
describe('budget calculations', () => { it('sums expenses', () => expect(total([{ amount: 100 } as never, { amount: 250 } as never])).toBe(350)); it('returns warning levels', () => { expect(warningFor(700, 1000, 70, 90)?.tone).toBe('caution'); expect(warningFor(1000, 1000, 70, 90)?.label).toBe('予算超過') }) })
