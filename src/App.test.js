// import { render, screen } from '@testing-library/react';
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

//? AAA pattern >>> Arrange , Act , Assert
// Arrange:: preconditions for test
// Act:: functions, clicks , renders ...

test("Testing React", () => {

  //! arrange
  const container = document.createElement("div");
  document.body.appendChild(container);

  //! act
  act(() => {
    render(<App />, container);
  });
  // render(<App />, container);

  //! assert
  expect(container.textContent).toBe("Hello");
  unmountComponentAtNode(container);
  container.remove();
});
