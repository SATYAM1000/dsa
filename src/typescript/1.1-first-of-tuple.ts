// Implement the utility First<T> which extracts the first element type from a tuple
type First<T> = T extends [infer F, ...infer _] ? F : never;

type T11 = First<[string, number, boolean]>; // string
type T12 = First<[]>;
