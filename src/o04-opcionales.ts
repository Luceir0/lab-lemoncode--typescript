import type { Coffee, Customer } from "./types.ts";
import { coffees, customers } from "./data.ts";
import { formatPrice } from "./o02-funciones.ts";

export const getCity = (customer: Customer): string => {
  return customer.address?.city ?? "Sin dirección";
};

export const getGrind = (customer: Customer): "grano" | "molido" => {
  return customer.preferences?.grind ?? "grano";
};

export const wantsNewsletter = (customer: Customer): boolean => {
  return customer.preferences?.newsletter ?? true;
};

export const wantsNewsletterSecondVersion = (customer: Customer): boolean => {
  return customer.preferences?.newsletter || true;
};

export const finalPrice = (coffee: Coffee): number => {
  return coffee.price * (1 - (coffee.discount ?? 0));
};

for (const customer of customers) {
  console.log(
    `${customer.name} · ${getCity(customer)} · ${getGrind(customer)} · newsletter: ${wantsNewsletter(customer)}`,
  );
}

// → Lucía · Málaga · molido · newsletter: false
// → Marcos · Sin dirección · grano · newsletter: true
// → Ana · Madrid · grano · newsletter: true

console.log(formatPrice(finalPrice(coffees[0]))); // → "13.41 €" (10 % de descuento)
console.log(formatPrice(finalPrice(coffees[1]))); // → "12.90 €" (sin descuento)
console.log(formatPrice(finalPrice(coffees[2]))); // → "15.50 €" (descuento 0)
console.log(formatPrice(finalPrice(coffees[4]))); // → "11.22 €" (15 %)

console.log(wantsNewsletterSecondVersion(customers[0])); // → true (pero debería devolver false)
// wantsNewsletterSecondVersion devuelve true porque aunque el valor de newsletter es false (falsy), el operador || devuelve el valor de la derecha (true) si el de la izquierda es falsy.
// Eso no pasa con el operador ??, que devuelve el valor de la derecha solo si el de la izquierda es null o undefined.
