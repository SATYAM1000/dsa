// 🧠 Question 4:
// Write a utility type `FunctionKeys<T>` that extracts the keys from an object
// whose values are functions.

// ✅ Type Definition:
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// 🔍 Explanation:
// - `[K in keyof T]`: iterate over each key in the object `T`.
// - `T[K] extends Function ? K : never`:
//     → if the value type at key `K` is a function, keep `K`
//     → otherwise, replace it with `never`
// - Final `[keyof T]` is an indexed access type that collapses the mapped type
//   into a union of all non-`never` keys.

// ✅ Example:
type Example2 = {
  id: number;
  name: string;
  greet(): void;
  compute: () => number;
};

type Result = FunctionKeys<Example2>;
// Result: "greet" | "compute"

// 🧠 Output explained:
// - `id: number`       → not a function → excluded
// - `name: string`     → not a function → excluded
// - `greet(): void`    → function       → included
// - `compute: () => number` → function  → included

// ✅ Final Result: "greet" | "compute"
