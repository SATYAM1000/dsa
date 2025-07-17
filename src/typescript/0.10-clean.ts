// 🧠 Question: Clean<T>
// Remove `null` and `undefined` from property value types, but keep the keys.

// ✅ Type Definition:
type Clean<T extends object> = {
  [K in keyof T]-?: Exclude<T[K], null | undefined>;
};

// ❗️Notes:
// - Removes null and undefined from value types
// - Makes all keys required (due to `-?`)
// - Does not clean nested objects unless used recursively

// 🧪 Example:
type Dirty = {
  a?: string | null;
  b: number | undefined;
  c: boolean;
};

type Cleaned = Clean<Dirty>;
// Result:
// {
//   a: string;
//   b: number;
//   c: boolean;
// }
