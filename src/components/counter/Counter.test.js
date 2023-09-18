import Counter from "./Counter";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
  //  jest.runAllTimers()
  //  jest.clearAllTimers()
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});

describe("counter", () => {
  //   it("should be zero", () => {
  //     act(() => {
  //       render(<Counter />, container);
  //     });
  //     const countElm = document.querySelector("p");
  //     expect(countElm.textContent).toBe("0");
  //   });
  //   test("should be one", () => {
  //     act(() => {
  //       render(<Counter />, container);
  //     });
  //     const buttonElm = document.querySelector("button");
  //     act(() => {
  //       buttonElm.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //     });
  //     const countElm = document.querySelector("p");
  //     expect(countElm.textContent).toBe("1");
  //   });
  //! in here we test the timing
  test("should be one after 5second", () => {
    act(() => {
      render(<Counter />, container);
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    const countElm = document.querySelector("p");
    expect(countElm.textContent).toBe("1");
  });
});
