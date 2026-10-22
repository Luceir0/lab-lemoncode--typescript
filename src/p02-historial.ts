import { addToCart } from "./o06-carrito.ts";
import type { Cart } from "./o06-carrito.ts";

export const createCartHistory = () => {
  let history: Cart[] = [[]];

  const current = (): Cart => history[history.length - 1];

  const add = (coffeeId: number): void => {
    history = [...history, addToCart(current(), coffeeId)];
  };

  const undo = (): void => {
    if (history.length > 1) {
      history = history.slice(0, -1);
    }
  };

  return { add, undo, current };
};

const history = createCartHistory();
history.add(1);
history.add(4);
history.undo();
console.log(history.current()); // → [{ coffeeId: 1, quantity: 1 }]
