type PaymentMethod =
  | { type: "card"; last4: string }
  | { type: "bizum"; phone: string }
  | { type: "transfer"; iban: string };
// | { type: "paypal"; email: string };

const card: PaymentMethod = { type: "card", last4: "4242" };
const bizum: PaymentMethod = { type: "bizum", phone: "666070707" };
const transfer: PaymentMethod = { type: "transfer", iban: "ES9384573459345" };

const assertNever = (value: never): never => {
  throw new Error(`Método de pago no contemplado: ${JSON.stringify(value)}`);
};

const describePayment = (method: PaymentMethod): string => {
  switch (method.type) {
    case "card":
      return `Tarjeta acabada en ${method.last4}`;
    case "bizum":
      return `Bizum al ${method.phone}`;
    case "transfer":
      return `Transferencia a ${method.iban}`;
    default:
      return assertNever(method);
  }
};

// Argument of type '{ type: "paypal"; email: string; }' is not assignable to parameter of type 'never'.

console.log(describePayment(card));
console.log(describePayment(bizum));
console.log(describePayment(transfer));
