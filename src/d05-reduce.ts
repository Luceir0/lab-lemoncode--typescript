import { coffees } from "./data.ts";
import type { Coffee, Roast } from "./types.ts";

export const myReduce = <T, A>(
  items: T[],
  reducer: (acc: A, item: T) => A,
  initial: A,
): A => {
  let acc = initial;
  for (let i = 0; i < items.length; i++) {
    acc = reducer(acc, items[i]);
  }
  return acc;
};

console.log(myReduce([1, 2, 3], (acc, n) => acc + n, 0)); // → 6

export const myStockValue = (list: Coffee[]): number =>
  myReduce(list, (total, coffee) => total + coffee.price * coffee.stock, 0);

console.log(myStockValue(coffees).toFixed(2)); // → "585.60"

export const myCountByRoast = (list: Coffee[]): Record<Roast, number> =>
  myReduce(
    list,
    (acc, coffee) => {
      acc[coffee.roast] = acc[coffee.roast] + 1;
      return acc;
    },
    { light: 0, medium: 0, dark: 0 },
  );

console.log(myCountByRoast(coffees)); // → { light: 2, medium: 2, dark: 2 }
