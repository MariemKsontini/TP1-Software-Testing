import { test, expect } from 'vitest';
import { sortArray } from '../sort';

test('sorts an array of numbers correctly', () => {
  expect(sortArray([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
});

test('handles already sorted arrays', () => {
  expect(sortArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test('handles reverse sorted arrays', () => {
  expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
