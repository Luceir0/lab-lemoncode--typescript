import { describe, expect, it } from "vitest";
import { coffees } from "./data.ts";
import {
  addToCart,
  cartTotal,
  changeQuantity,
  removeFromCart,
  type Cart,
} from "./o06-carrito.ts";

describe("addToCart", () => {
  it("añade un café nuevo con cantidad 1", () => {
    expect(addToCart([], 1)).toEqual([{ coffeeId: 1, quantity: 1 }]);
  });

  it("suma 1 si el café ya está en el carrito", () => {
    const cart: Cart = [
      { coffeeId: 1, quantity: 1 },
      { coffeeId: 4, quantity: 1 },
    ];
    expect(addToCart(cart, 1)).toEqual([
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 1 },
    ]);
  });

  it("no modifica el carrito original", () => {
    const empty: Cart = [];
    addToCart(empty, 1);
    expect(empty).toEqual([]);
  });

  it("solo copia lo que cambia", () => {
    const cart2 = addToCart(addToCart([], 1), 4);
    const cart3 = addToCart(cart2, 1);
    expect(cart3).not.toBe(cart2); // carrito nuevo
    expect(cart3[0]).not.toBe(cart2[0]); // el café 1 cambió: objeto nuevo
    expect(cart3[1]).toBe(cart2[1]); // el café 4 no cambió: se comparte
  });
});

describe("changeQuantity", () => {
  const cart: Cart = [
    { coffeeId: 1, quantity: 2 },
    { coffeeId: 4, quantity: 1 },
  ];

  it("cambia la cantidad de un café", () => {
    expect(changeQuantity(cart, 4, 3)).toEqual([
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 3 },
    ]);
  });

  it("quita el café si la cantidad es 0", () => {
    expect(changeQuantity(cart, 4, 0)).toEqual([{ coffeeId: 1, quantity: 2 }]);
  });

  it("no modifica el carrito original", () => {
    changeQuantity(cart, 4, 3);
    expect(cart[1].quantity).toBe(1);
  });
});

describe("removeFromCart", () => {
  it("quita el café del carrito", () => {
    const cart: Cart = [
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 3 },
    ];
    expect(removeFromCart(cart, 1)).toEqual([{ coffeeId: 4, quantity: 3 }]);
  });
});

describe("cartTotal", () => {
  it("suma el precio con descuento por la cantidad", () => {
    const cart: Cart = [
      { coffeeId: 1, quantity: 2 },
      { coffeeId: 4, quantity: 3 },
    ];
    expect(cartTotal(cart, coffees)).toBeCloseTo(58.32);
  });

  it("ignora los cafés que no existen", () => {
    expect(cartTotal([{ coffeeId: 99, quantity: 1 }], coffees)).toBe(0);
  });
});
