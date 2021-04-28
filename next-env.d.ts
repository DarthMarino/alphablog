/// <reference types="next" />
/// <reference types="next/types/global" />

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
function createRef<T>(): RefObject<T>;
