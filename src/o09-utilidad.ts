import { coffees } from "./data.ts";
import type { Coffee, Roast } from "./types.ts";

type CoffeePreview = Pick<Coffee, "id" | "name" | "price">;

export const toPreview = ({ id, name, price }: Coffee): CoffeePreview => {
  return { id, name, price };
};

type NewCoffee = Omit<Coffee, "id">;

export const createCoffee = (data: NewCoffee, list: Coffee[]): Coffee => {
  const newId = Math.max(...list.map((coffee) => coffee.id)) + 1;
  return { ...data, id: newId };
};

export const updateCoffee = (
  coffee: Coffee,
  changes: Partial<NewCoffee>,
): Coffee => {
  return { ...coffee, ...changes };
};

export const countByRoast = (list: Coffee[]): Record<Roast, number> => {
  return list.reduce(
    (acc, coffee) => {
      acc[coffee.roast] = acc[coffee.roast] + 1;
      return acc;
    },
    { light: 0, medium: 0, dark: 0 },
  );
};

console.log(toPreview(coffees[0]));
// → { id: 1, name: "Etiopía Yirgacheffe", price: 14.9 }

console.log(
  createCoffee(
    {
      name: "Ruanda Nyamasheke",
      origin: "Ruanda",
      notes: ["melocotón", "té verde"],
      roast: "light",
      price: 16.4,
      stock: 10,
    },
    coffees,
  ),
);
// → { id: 7, name: "Ruanda Nyamasheke", origin: "Ruanda", ... }

const cheaper = updateCoffee(coffees[1], { price: 11.9, stock: 10 });
console.log(cheaper.price, cheaper.stock); // → 11.9 10
console.log(coffees[1].price, coffees[1].stock); // → 12.9 3. Intacto

console.log(countByRoast(coffees)); // → { light: 2, medium: 2, dark: 2 }
