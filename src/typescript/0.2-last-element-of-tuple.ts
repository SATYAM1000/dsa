// 🔍 Purpose:
// Extract the last element of a tuple `T`

// ✅ Type Definition
type Last<T> = T extends [...infer _, infer L] ? L : never; // return the type of last element

// ✅ Example
type T1 = Last<[1, 2, 3, 4, string]>; // string

const value: T1 = "satyam";

// 🧠 Concept:
// - `...infer _`: captures all elements except the last
// - `infer L`: captures the last element
// - `T` must be a tuple (not a generic array like `string[]`)

// ❌ Invalid Example
type T2 = Last<string[]>; // never (not a fixed-length tuple)
