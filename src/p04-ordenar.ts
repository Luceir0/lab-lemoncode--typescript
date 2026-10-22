import { coffees, customers } from "./data.ts";

export const sortBy = <T, K extends keyof T>(items: T[], key: K): T[] =>
  items.toSorted((a, b) => {
    const x = a[key];
    const y = b[key];

    if (typeof x === "string" && typeof y === "string") {
      return x.localeCompare(y);
    }
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });

console.log(sortBy(coffees, "price").map((coffee) => coffee.name));
// → ["Brasil Cerrado", "Colombia Huila", "Guatemala Antigua", "Sumatra Mandheling", "Etiopía Yirgacheffe", "Kenia AA"]

console.log(sortBy(customers, "name").map((customer) => customer.name));
// → ["Ana", "Lucía", "Marcos"]

console.log(coffees.map((coffee) => coffee.name)); // → el original sigue en su orden

// sortBy(coffees, "color");
// Argument of type '"color"' is not assignable to parameter of type 'keyof Coffee'.
