// import type { Coffee } from "./types.ts";
// import { coffees } from "./data.ts";

// const coffeeWrongRoast: Coffee = {
//   id: 1,
//   name: "Etiopía Yirgacheffe",
//   notes: ["floral", "bergamota", "té negro"],
//   origin: "Etiopía",
//   roast: "extra",
//   price: 14.9,
//   stock: 12,
// };

// Type '"extra"' is not assignable to type 'Roast'.ts(2322)
// types.ts(8, 3): The expected type comes from property 'roast' which is declared here on type 'Coffee'

// const coffeeNoPrice: Coffee = {
//   id: 1,
//   name: "Etiopía Yirgacheffe",
//   notes: ["floral", "bergamota", "té negro"],
//   origin: "Etiopía",
//   roast: "light",
//   stock: 12,
// };

// Property 'price' is missing in type '{ id: number; name: string; notes: string[]; origin: string; roast: "light"; stock: number; }' but required in type 'Coffee'.ts(2741)
// types.ts(9, 3): 'price' is declared here.

// coffees[0].id = 1;

// Cannot assign to 'id' because it is a read-only property.
