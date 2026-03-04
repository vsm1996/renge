import { describe, it, expect } from "vitest";
import { phyllotaxis } from "../index";
import { GOLDEN_ANGLE } from "../index";

describe("phyllotaxis", () => {
  it("returns exactly count points", () => {
    expect(phyllotaxis({ count: 1 })).toHaveLength(1);
    expect(phyllotaxis({ count: 10 })).toHaveLength(10);
    expect(phyllotaxis({ count: 100 })).toHaveLength(100);
  });

  it("returns empty array for count 0", () => {
    expect(phyllotaxis({ count: 0 })).toHaveLength(0);
  });

  it("each point has x, y, index, angle, radius", () => {
    const points = phyllotaxis({ count: 5 });
    for (const point of points) {
      expect(point).toHaveProperty("x");
      expect(point).toHaveProperty("y");
      expect(point).toHaveProperty("index");
      expect(point).toHaveProperty("angle");
      expect(point).toHaveProperty("radius");
    }
  });

  it("index 0 has radius 0 (at origin)", () => {
    const [first] = phyllotaxis({ count: 1 });
    expect(first.radius).toBe(0);
    expect(first.x).toBe(0);
    expect(first.y).toBe(0);
  });

  it("index field matches array position", () => {
    const points = phyllotaxis({ count: 20 });
    points.forEach((point, i) => {
      expect(point.index).toBe(i);
    });
  });

  it("radius grows with sqrt of index", () => {
    const spread = 10;
    const points = phyllotaxis({ count: 10, spread });
    points.forEach((point) => {
      const expected = spread * Math.sqrt(point.index);
      expect(point.radius).toBeCloseTo(expected, 8);
    });
  });

  it("scale factor multiplies radius", () => {
    const p1 = phyllotaxis({ count: 5, spread: 10, scale: 1 });
    const p2 = phyllotaxis({ count: 5, spread: 10, scale: 2 });
    for (let i = 1; i < 5; i++) {
      expect(p2[i].radius).toBeCloseTo(p1[i].radius * 2, 8);
    }
  });

  it("default angleOffset is GOLDEN_ANGLE", () => {
    const points = phyllotaxis({ count: 3 });
    // angle for index i = i * GOLDEN_ANGLE * (PI/180)
    const expectedAngle1 = 1 * GOLDEN_ANGLE * (Math.PI / 180);
    expect(points[1].angle).toBeCloseTo(expectedAngle1, 8);
  });

  it("custom angleOffset changes angles", () => {
    const defaultPoints = phyllotaxis({ count: 5 });
    const customPoints = phyllotaxis({ count: 5, angleOffset: 90 });
    expect(defaultPoints[1].angle).not.toBeCloseTo(customPoints[1].angle, 1);
  });

  it("x and y are derived from polar coordinates", () => {
    const points = phyllotaxis({ count: 10 });
    for (const point of points) {
      expect(point.x).toBeCloseTo(point.radius * Math.cos(point.angle), 8);
      expect(point.y).toBeCloseTo(point.radius * Math.sin(point.angle), 8);
    }
  });
});
