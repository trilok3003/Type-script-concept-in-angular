type Constructor = new (...args: any[]) => {};

export function MixinFunction<TBase extends Constructor>(
  Base: TBase = class {} as any
) {
  return class Math extends Base {
    add(a: number, b: number): number {
      return a + b;
    }
    subtract(a: number, b: number): number {
      return a - b;
    }
    multiply(a: number, b: number): number {
      return a * +b;
    }
    divide(a: number, b: number): number {
      return a / b;
    }
  };
}
