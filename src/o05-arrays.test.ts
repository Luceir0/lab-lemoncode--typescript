import { describe, expect, it } from "vitest";
import { coffees } from "./data.ts";
import { availableCoffees, catalogLabels, stockValue } from "./o05-arrays.ts";

describe("availableCoffees", () => {
  it("devuelve solo los cafés con stock", () => {
    expect(availableCoffees(coffees).map((coffee) => coffee.name)).toEqual([
      "Etiopía Yirgacheffe",
      "Colombia Huila",
      "Brasil Cerrado",
      "Guatemala Antigua",
    ]);
  });
});

describe("catalogLabels", () => {
  it("devuelve las etiquetas de los cafés disponibles, del más barato al más caro", () => {
    expect(catalogLabels(coffees)).toEqual([
      "Brasil Cerrado (Brasil) · 10.50 €",
      "Colombia Huila (Colombia) · 12.90 €",
      "Guatemala Antigua (Guatemala) · 13.20 €",
      "Etiopía Yirgacheffe (Etiopía) · 14.90 €",
    ]);
  });

  it("no cambia el orden del catálogo original", () => {
    catalogLabels(coffees);
    expect(coffees.map((coffee) => coffee.name)).toEqual([
      "Etiopía Yirgacheffe",
      "Colombia Huila",
      "Kenia AA",
      "Brasil Cerrado",
      "Guatemala Antigua",
      "Sumatra Mandheling",
    ]);
  });
});

describe("stockValue", () => {
  it("suma precio × stock de los cafés disponibles", () => {
    expect(stockValue(coffees)).toBeCloseTo(585.6);
  });
});
