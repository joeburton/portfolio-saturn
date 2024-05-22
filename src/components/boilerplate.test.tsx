import { vi } from "vitest";

describe("Boilerplate", () => {
  it("checking vitest spyOn works 😜", () => {
    const cart = {
      getApples: () => 42,
    };
    const spy = vi.spyOn(cart, "getApples").mockReturnValue(10);

    expect(spy).toHaveBeenCalled();
    expect(cart.getApples()).toEqual(10);
  });
});
