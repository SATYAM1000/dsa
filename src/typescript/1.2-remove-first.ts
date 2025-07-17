// Implement Tail<T> that returns the rest of the tuple after the first element

type Tail<T> = T extends [infer A, ...infer B] ? B : never;

type T13 = Tail<[string, number, boolean]>; // [number, boolean]
type T23 = Tail<[]>;
