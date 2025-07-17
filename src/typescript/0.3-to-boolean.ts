// Question 3: Create a type that converts all property types of an object into boolean, preserving keys.

type ToBoolean<T extends object> = {
  [K in keyof T]: boolean;
};

type Example = ToBoolean<{
  name: string;
  age: number;
  active: () => void;
}>;
