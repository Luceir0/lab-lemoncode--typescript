import { produce } from "immer";

interface Subscription {
  customer: {
    name: string;
    address: {
      city: string;
      zip: string;
    };
  };
  plan: {
    name: "Básico" | "Popular" | "Pro";
    bagsPerMonth: number;
  };
  deliveries: string[];
}

const subscription: Subscription = {
  customer: {
    name: "Lucía",
    address: {
      city: "Málaga",
      zip: "29005",
    },
  },
  plan: {
    name: "Popular",
    bagsPerMonth: 2,
  },
  deliveries: ["2026-09-05", "2026-10-05"],
};

const movedSpread: Subscription = {
  ...subscription,
  customer: {
    ...subscription.customer,
    address: {
      ...subscription.customer.address,
      city: "Sevilla",
    },
  },
};

const movedImmer = produce(subscription, (subscriptionCopy) => {
  subscriptionCopy.customer.address.city = "Sevilla";
});

const upgraded = produce(subscription, (subscriptionCopy) => {
  subscriptionCopy.plan.name = "Pro";
  subscriptionCopy.plan.bagsPerMonth = 3;
  subscriptionCopy.deliveries.push("2026-11-05");
});

console.log(movedSpread.customer.address.city); // → "Sevilla"
console.log(movedImmer.customer.address.city); // → "Sevilla"
console.log(subscription.customer.address.city); // → "Málaga". Intacto

console.log(movedImmer.customer === subscription.customer); // → false. Cambió
console.log(movedImmer.plan === subscription.plan); // → true. No cambió: se comparte

console.log(upgraded.plan); // → { name: "Pro", bagsPerMonth: 3 }
console.log(upgraded.deliveries); // → ["2026-09-05", "2026-10-05", "2026-11-05"]
console.log(subscription.plan); // → { name: "Popular", bagsPerMonth: 2 }
console.log(subscription.deliveries); // → ["2026-09-05", "2026-10-05"]

console.log(produce(subscription, () => {}) === subscription); // → true
console.log(Object.isFrozen(upgraded.plan)); // → true

// Comentario: Es mucho más legible la versión con Immer.
// Utilizaría spread solamente cuando el cambio se encontrase en el primer nivel,
// o si no quisiera o pudiera instalar ninguna librería extra.
