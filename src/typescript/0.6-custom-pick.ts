// write a custom pick

type CustomPick<T extends object, K extends keyof T> = {
  [P in K]: T[P];
};

type Person = {
  name: string;
  age: number;
  greet(): void;
};
type NameOnly = CustomPick<Person, "name">;
// Result: { name: string }

type NameAndAge = CustomPick<Person, "name" | "age">;
// Result: { name: string; age: number }
