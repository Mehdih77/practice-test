import Counter from "./Counter";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("counter", () => {
  it("should be zero", () => {
    act(() => {
      render(<Counter />, container);
    });
    const countElm = document.querySelector("p");
    expect(countElm.textContent).toBe("0");
  });
  test("should be one", () => {
    act(() => {
      render(<Counter />, container);
    });
    const buttonElm = document.querySelector("button");
    act(() => {
      buttonElm.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const countElm = document.querySelector("p");
    expect(countElm.textContent).toBe("1");
  });
});
