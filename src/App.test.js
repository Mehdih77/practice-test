// import { render, screen } from '@testing-library/react';
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// //? AAA pattern >>> Arrange , Act , Assert
// // Arrange:: preconditions for test
// // Act:: functions, clicks , renders ...

// test("Testing React", () => {

//   //! arrange
//   const container = document.createElement("div");
//   document.body.appendChild(container);

//   //! act
//   act(() => {
//     render(<App />, container);
//   });
//   // render(<App />, container);

//   //! assert
//   expect(container.textContent).toBe("Hello");
//   unmountComponentAtNode(container);
//   container.remove();
// });

/* ---------------###############------------------------- */

// //! setup : execute before any test
// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// test("Testing React", () => {
//   act(() => {
//     render(<App />, container);
//   });
//   expect(container.textContent).toBe("Hello");
// });

// //! teardown : execute after any test
// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

/* ---------------###############------------------------- */

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

//! describe => use for better organization
//? test with Props
describe("Testing", () => {
  test("without name", () => {
    act(() => {
      render(<App />, container);
    });
    expect(container.textContent).toBe("Hello");
  });
  test("with name", () => {
    act(() => {
      render(<App name="Tommy" />, container);
    });
    expect(container.textContent).toBe("Hello Tommy");
  });
});
