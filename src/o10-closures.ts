type PriceRule = (price: number) => number;

export const createDiscount = (rate: number): PriceRule => {
  return (price) => price * (1 - rate);
};

export const createOrderIdGenerator = (prefix: string): (() => string) => {
  let count = 0;
  return () => {
    count++;
    return `${prefix}-${count}`;
  };
};

const blackFriday = createDiscount(0.2);
const members = createDiscount(0.1);

console.log(blackFriday(10)); // → 8
console.log(members(10)); // → 9
console.log([10, 20, 15].map(blackFriday)); // → [8, 16, 12]

const nextOrderId = createOrderIdGenerator("TUE");
const nextGiftId = createOrderIdGenerator("REGALO");

console.log(nextOrderId()); // → "TUE-1"
console.log(nextOrderId()); // → "TUE-2"
console.log(nextGiftId()); // → "REGALO-1"
console.log(nextOrderId()); // → "TUE-3"

// ¿Por qué en .map(blackFriday) no ponemos paréntesis?
//  Porque .map ya le está pasando los valores a blackFriday y está ejecutando la función

// ¿blackFriday es pura?
// Sí. Con el mismo precio devuelve siempre lo mismo, y no modifica nada de fuera: solo lee rate.

// ¿Y nextOrderId?
// No. Aunque siempre la llamemos de la misma manera, siempre devuelve algo distinto
