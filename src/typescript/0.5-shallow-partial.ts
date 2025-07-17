// 🧠 Question: Implement ShallowPartial<T>
// Create a utility type that makes only the top-level properties of an object optional,
// but does NOT recurse into nested properties (unlike DeepPartial).

// ✅ Type Definition:
type ShallowPartial<T> = {
  [K in keyof T]?: T[K];
};

// 🔍 Explanation:
// - `[K in keyof T]`: iterate over all keys in object `T`.
// - `?`: makes each key optional at the top level.
// - `T[K]`: keeps the original type (even if it's a nested object).

// ✅ Example:
type Example3 = {
  name: string;
  config: {
    enabled: boolean;
    retries: number;
  };
};

type Result3 = ShallowPartial<Example>;

/*
  🔽 Result:
  {
    name?: string;
    config?: {
      enabled: boolean;
      retries: number;
    };
  }
  */

// 🧠 Key Concept:
// - `ShallowPartial<T>` affects only the **first level** of properties.
// - Does NOT touch or modify nested object properties.
// - Useful when you want to allow partial updates to a top-level config or schema.

// 🔁 Comparison with built-in Partial<T>:
type Deep = Partial<Example>;

/*
  🔽 Deep:
  {
    name?: string;
    config?: {
      enabled?: boolean;
      retries?: number;
    };
  }
  */
