import { test, expect } from 'vitest';
import { isPriceInRange } from '../priceCheck';

test('price is within range', () => {
  expect(isPriceInRange(50, 1, 100)).toBeTruthy();
});

test('price is below the range', () => {
  expect(isPriceInRange(-1, 0, 100)).toBeFalsy();
});

test('price is above the range', () => {
  expect(isPriceInRange(101, 0, 100)).toBeFalsy();
});
