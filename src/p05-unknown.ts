const ROASTS = ["light", "medium", "dark"];

// Comprueba, propiedad por propiedad, que un dato desconocido tiene la forma de Coffee
export const isCoffee = (data: unknown): boolean => {
  if (typeof data !== "object" || data === null) return false;

  return (
    "id" in data &&
    typeof data.id === "number" &&
    "name" in data &&
    typeof data.name === "string" &&
    "origin" in data &&
    typeof data.origin === "string" &&
    "notes" in data &&
    Array.isArray(data.notes) &&
    data.notes.every((note) => typeof note === "string") &&
    "roast" in data &&
    typeof data.roast === "string" &&
    ROASTS.includes(data.roast) &&
    "price" in data &&
    typeof data.price === "number" &&
    "stock" in data &&
    typeof data.stock === "number" &&
    (!("discount" in data) || typeof data.discount === "number")
  );
};

const response = '{"id": 8, "name": "Perú Cajamarca", "price": 13.5}';
const data: unknown = JSON.parse(response);
console.log(isCoffee(data)); // → false (le faltan propiedades)

const fullResponse =
  '{"id": 8, "name": "Perú Cajamarca", "origin": "Perú", "notes": ["miel", "nuez"], "roast": "medium", "price": 13.5, "stock": 10}';
console.log(isCoffee(JSON.parse(fullResponse))); // → true

console.log(isCoffee(null)); // → false
console.log(isCoffee("café")); // → false
