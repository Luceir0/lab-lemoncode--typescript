import { coffees, customers } from "./data.ts";

type OrderStatus = "pending" | "roasting" | "shipped" | "delivered";

const statusLabel: Record<OrderStatus, string> = {
  pending: "Pendiente",
  roasting: "Tostando",
  shipped: "Enviado",
  delivered: "Entregado",
};

// Al comentar "delivered":
// Property 'delivered' is missing in type '{ pending: string; roasting: string; shipped: string; }' but required in type 'Record<OrderStatus, string>'.ts(2741)

const statusMessage = (status: OrderStatus): string => {
  return `Tu pedido está: ${statusLabel[status]}`;
};

const normalizeId = (id: string | number): number => {
  return typeof id === "string" ? Number(id) : id;
};

const findById = <T extends { id: number }>(
  items: T[],
  id: number,
): T | null => {
  return items.find((item) => item.id === id) ?? null;
};

console.log(statusMessage("roasting")); // → "Tu pedido está: Tostando"

console.log(normalizeId("4")); // → 4
console.log(normalizeId(4)); // → 4

console.log(findById(coffees, normalizeId("4"))?.name ?? "No encontrado"); // → "Brasil Cerrado"
console.log(findById(customers, 3)?.email ?? "No encontrado"); // → "ana@mail.com"
console.log(findById(coffees, 99)?.name ?? "No encontrado"); // → "No encontrado"

// findById de la línea 35:
// const findById: <Coffee>(items: Coffee[], id: number) => Coffee | null

// findById de la línea 36:
// const findById: <Customer>(items: Customer[], id: number) => Customer | null
