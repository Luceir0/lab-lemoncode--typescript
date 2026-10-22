type Roast = "light" | "medium" | "dark";

interface Coffee {
  readonly id: number;
  name: string;
  origin: string;
  notes: string[];
  roast: Roast;
  price: number;
  stock: number;
  discount?: number;
}

interface Address {
  street: string;
  city: string;
  zip: string;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  address?: Address;
  preferences?: {
    grind?: "grano" | "molido";
    newsletter?: boolean;
  };
}

export type { Roast, Coffee, Address, Customer };
