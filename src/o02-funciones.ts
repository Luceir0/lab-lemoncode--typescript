import type { Roast } from "./types.ts";
import { coffees } from "./data.ts";

export const formatPrice = (price: number, currency = "€"): string => {
  return `${price.toFixed(2)} ${currency}`;
};

export const stockStatus = (stock: number): string => {
  if (stock === 0) {
    return "Agotado";
  }
  if (stock < 5) {
    return "Últimas unidades";
  }
  return "Disponible";
};

export const roastLabel = (roast: Roast): string => {
  switch (roast) {
    case "light":
      return "Tueste claro";
    case "medium":
      return "Tueste medio";
    case "dark":
      return "Tueste oscuro";
  }
};

// Al quitar uno de los cases del switch:
// Function lacks ending return statement and return type does not include 'undefined'.

console.log(formatPrice(14.9)); // "14.90 €"
console.log(formatPrice(14.9, "$")); // "14.90 $"
console.log(formatPrice(10)); // "10.00 €"

for (const coffee of coffees) {
  console.log(
    `${coffee.name} · ${roastLabel(coffee.roast)} · ${stockStatus(coffee.stock)}`,
  );
}

// Etiopía Yirgacheffe · Tueste claro · Disponible
// Colombia Huila · Tueste medio · Últimas unidades
// Kenia AA · Tueste claro · Agotado
// Brasil Cerrado · Tueste oscuro · Disponible
// Guatemala Antigua · Tueste medio · Disponible
// Sumatra Mandheling · Tueste oscuro · Agotado
