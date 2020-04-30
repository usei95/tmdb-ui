import viewLoader from "@/utils/view-loader";

describe("viewLoader", () => {
  it("should return import promise of given view file", async () => {
    const file = await viewLoader("Discover/index")();
    expect(file.default.name).toBe("Discover");
  });
});
