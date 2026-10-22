import type { Coffee } from "./types.ts";
import { coffees } from "./data.ts";
import { formatPrice } from "./o02-funciones.ts";
import { coffeeCard } from "./o03-destructuring.ts";

export const availableCoffees = (list: Coffee[]): Coffee[] => {
  return list.filter((coffee) => coffee.stock > 0);
};

export const catalogLabels = (list: Coffee[]): string[] => {
  return availableCoffees(list)
    .toSorted((a, b) => a.price - b.price)
    .map(coffeeCard);
};

export const stockValue = (list: Coffee[]): number => {
  return list
    .filter((coffee) => coffee.stock > 0)
    .reduce((total, coffee) => total + coffee.price * coffee.stock, 0);
};

console.log(availableCoffees(coffees).map((coffee) => coffee.name));
// ["Etiopía Yirgacheffe", "Colombia Huila", "Brasil Cerrado", "Guatemala Antigua"]

console.log(catalogLabels(coffees));
// ["Brasil Cerrado (Brasil) · 10.50 €",
//    "Colombia Huila (Colombia) · 12.90 €",
//    "Guatemala Antigua (Guatemala) · 13.20 €",
//    "Etiopía Yirgacheffe (Etiopía) · 14.90 €"]

console.log(formatPrice(stockValue(coffees))); // "585.60 €"

console.log(coffees.some((coffee) => coffee.stock === 0)); // true
console.log(coffees.every((coffee) => coffee.notes.length > 0)); // true
console.log(coffees.find((coffee) => coffee.id === 4)?.name ?? "No existe"); // "Brasil Cerrado"
console.log(coffees.find((coffee) => coffee.id === 99)?.name ?? "No existe"); // "No existe"

// Y la comprobación final: el catálogo sigue en su orden original
console.log(coffees.map((coffee) => coffee.name));
// ["Etiopía Yirgacheffe", "Colombia Huila", "Kenia AA",
//    "Brasil Cerrado", "Guatemala Antigua", "Sumatra Mandheling"]

// Probé a cambiar toSorted por sort y el catálogo no se desordenó.
// El método sort desordena la lista que le das, pero aquí no le doy coffees.
// le doy la copia que crea filter (en availableCoffees). Se desordena la copia, no el original.
// Si hiciera coffees.sort(...) directamente, el catálogo original sí cambiaría de orden.
