import type { Coffee } from "./types.ts";
import { coffees } from "./data.ts";
import { formatPrice } from "./o02-funciones.ts";

export const coffeeCard = ({ name, price, origin }: Coffee): string => {
  return `${name} (${origin}) · ${formatPrice(price)}`;
};

export const mainNote = ({ notes }: Coffee): string => {
  const [firstNote, ...restNotes] = notes;
  return `${firstNote} y ${restNotes.length} más`;
};

export const toPublicCoffee = ({
  stock,
  ...rest
}: Coffee): Omit<Coffee, "stock"> => {
  return rest;
};

export const sumAll = (...amounts: number[]): number => {
  let total = 0;
  for (const amount of amounts) {
    total += amount;
  }
  return total;
};

console.log(coffeeCard(coffees[0])); //"Etiopía Yirgacheffe (Etiopía) · 14.90 €"
console.log(mainNote(coffees[0])); //"floral y 2 más"
console.log(mainNote(coffees[1])); //"caramelo y 1 más"

console.log(toPublicCoffee(coffees[1]));
//{id: 2, name: "Colombia Huila", origin: "Colombia",
//notes: ["caramelo", "manzana roja"], roast: "medium", price: 12.9 }
console.log(coffees[1].stock); //3. El original sigue teniendo stock

console.log(sumAll(1, 2, 3)); //6
console.log(sumAll()); //0
console.log(sumAll(...coffees.map((coffee) => coffee.stock))); //48

// En la console.log(sumAll(...coffees.map((coffee) => coffee.stock))); se está usando el operador spread para pasar cada stock de los cafés como un argumento separado a la función sumAll. Así se pueden sumar todos los stocks de los cafés en una sola llamada a la función.
