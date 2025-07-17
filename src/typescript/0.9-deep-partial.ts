// 🧠 Custom Utility: DeepPartial<T>
// Makes all properties optional, including nested ones (recursively)

// ✅ Type Definition:
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepPartial<T[K]>
    : T[K];
};

// ✅ Example:
type Example4 = {
  name: string;
  config: {
    enabled: boolean;
    retries: number;
    nested: { deep: string };
    callback: () => void;
  };
};

type PartialExample = DeepPartial<Example>;

/*
  🔽 Result:
  {
    name?: string;
    config?: {
      enabled?: boolean;
      retries?: number;
      nested?: {
        deep?: string;
      };
      callback?: () => void;
    };
  }
  */

// 🧠 Notes:
// - Recursively makes each key optional
// - Skips recursion for functions
// - Very useful for form builders, update DTOs, and config overrides
