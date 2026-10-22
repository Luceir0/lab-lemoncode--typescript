import { coffees } from "./data.ts";

export const myMap = <T, U>(
  items: T[],
  transform: (item: T, index: number) => U,
): U[] => {
  const result: U[] = [];
  for (let i = 0; i < items.length; i++) {
    result.push(transform(items[i], i));
  }
  return result;
};

console.log(myMap([1, 2, 3], (n) => n * 2)); // → [2, 4, 6]
console.log(myMap(coffees, (coffee) => coffee.name)); // → los 6 nombres

export const myFilter = <T>(
  items: T[],
  predicate: (item: T, index: number) => boolean,
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < items.length; i++) {
    if (predicate(items[i], i)) {
      result.push(items[i]);
    }
  }
  return result;
};

console.log(myFilter([1, 2, 3, 4, 5], (n) => n > 2)); // → [3, 4, 5]
console.log(myFilter(coffees, (coffee) => coffee.stock > 0)); // → 4 cafés
