// import { render, screen } from '@testing-library/react';
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";

test("Testing React", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  render(<App />, container);

  unmountComponentAtNode(container);
  container.remove();
});
