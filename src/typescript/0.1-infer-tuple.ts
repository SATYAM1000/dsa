// 🔍 Question: InferTuple – Extract types from a 2-element tuple

// ✅ Purpose:
// This utility type extracts the types of the first and second elements
// from a tuple `T`, but only if `T` is a tuple with exactly two elements.

// ✅ Type definition:
type InferTuple<T> = T extends [infer A, infer B] ? [A, B] : never;

// 🔍 Explanation:
// - `T extends [infer A, infer B]`:
//    → Checks if `T` is a tuple with exactly two elements.
//    → If yes, it infers the types of those two elements into `A` and `B`.
// - If the check passes, it returns `[A, B]` (the inferred tuple).
// - Otherwise, it returns `never` (i.e., T is not a valid 2-element tuple).

// ✅ Example usage:
type Test = InferTuple<["satyam", "hello"]>;
// Result: ["satyam", "hello"]
// Explanation:
//   - "satyam" is inferred as A
//   - "hello" is inferred as B
//   → Result is a tuple with the same values.

// 🧠 Edge Cases to Remember:
type Test1 = InferTuple<[number, string]>; // ✅ [number, string]
type Test2 = InferTuple<[boolean]>; // ❌ never (only one element)
type Test3 = InferTuple<[string, number, boolean]>; // ❌ never (three elements)
type Test4 = InferTuple<string[]>; // ❌ never (not fixed length)

// ✅ Summary:
// InferTuple<T> is useful when:
// - You want to operate only on fixed-length 2-element tuples.
// - You want to extract or enforce types for the first two elements.
// - You want to reject any other shape of tuple or array.
