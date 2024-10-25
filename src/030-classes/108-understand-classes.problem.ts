import { expect, it } from "vitest";

class CanvasNode {
  public readonly x: number;
  public readonly y: number;

  public constructor() {
    this.x = 0;
    this.y = 0;
  }
}

it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;
});
