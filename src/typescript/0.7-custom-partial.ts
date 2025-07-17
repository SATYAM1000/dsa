type CustomPartial<T> = {
  [K in keyof T]?: T[K];
};

type Person2 = {
  name: string;
  age: number;
  greet(): void;
};

type Value = CustomPartial<Person2>;
