import type { Coffee } from "./types.ts";

// 1. Impura. shippingCost podría cambiar, luego el resultado sería distinto.

let shippingCost = 3.5;
export const totalWithShipping = (amount: number): number =>
  amount + shippingCost;

export const totalWithShippingPure = (
  amount: number,
  shippingCost: number,
): number => amount + shippingCost;

// ---------------

// 2. Impura. Está provocando un cambio en el café que recibe como parámetro.

export const applyDiscount = (coffee: Coffee, rate: number): Coffee => {
  coffee.price = coffee.price * (1 - rate);
  return coffee;
};

export const applyDiscountPure = (coffee: Coffee, rate: number): Coffee => {
  return { ...coffee, price: coffee.price * (1 - rate) };
};

// ---------------

// 3. Pura. map devuelve un nuevo array.

export const namesInCapitals = (list: Coffee[]): string[] =>
  list.map((coffee) => coffee.name.toUpperCase());

// ---------------

// 4. Impura. sort desordena el array original, no devuelve uno nuevo.

export const sortByPrice = (list: Coffee[]): Coffee[] =>
  list.sort((a, b) => a.price - b.price);

export const sortByPricePure = (list: Coffee[]): Coffee[] =>
  [...list].sort((a, b) => a.price - b.price);

// ---------------

// 5. Impura. Con los mismos datos de entrada, devuelve un valor diferente en cada llamada.

export const createOrderId = (): string => `ORD-${Date.now()}`;

export const createOrderIdPure = (timestamp: number): string =>
  `ORD-${timestamp}`;

// ---------------

// 6. Pura. Tiene un push, pero modifica el array tags, que se crea dentro de la función.
// No toca el café que recibe y con el mismo café devuelve siempre lo mismo.

export const buildTags = (coffee: Coffee): string[] => {
  const tags: string[] = [];
  for (const note of coffee.notes) {
    tags.push(`#${note}`);
  }
  return tags;
};
