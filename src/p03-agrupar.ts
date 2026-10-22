import type { Coffee, Roast } from "./types.ts";
import { coffees } from "./data.ts";

export const groupByRoast = (list: Coffee[]): Record<Roast, Coffee[]> => {
  return list.reduce<Record<Roast, Coffee[]>>(
    (acc, coffee) => ({
      ...acc,
      [coffee.roast]: [...acc[coffee.roast], coffee],
    }),
    { light: [], medium: [], dark: [] },
  );
};

const groups = groupByRoast(coffees);
console.log(groups.light.map((coffee) => coffee.name)); // → ["Etiopía Yirgacheffe", "Kenia AA"]
console.log(groups.medium.map((coffee) => coffee.name)); // → ["Colombia Huila", "Guatemala Antigua"]
console.log(groups.dark.map((coffee) => coffee.name)); // → ["Brasil Cerrado", "Sumatra Mandheling"]
