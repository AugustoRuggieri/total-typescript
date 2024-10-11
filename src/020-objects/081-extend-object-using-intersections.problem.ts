import { Extends, Expect } from "@total-typescript/helpers";

type G = {
  id: string;
  createdAt: Date;
}

type User = {
  name: string;
  email: string;
} & G;

type Product = {
  name: string;
  price: number;
} & G;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
