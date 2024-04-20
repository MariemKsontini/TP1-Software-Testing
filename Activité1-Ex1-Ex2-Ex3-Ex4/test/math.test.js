import { test, expect } from 'vitest';
import { add } from '../math';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
