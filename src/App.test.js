import { render, screen } from "@testing-library/react";
import App from "./App";

test("First Test", () => {
  //   const { debug, container } = render(<App />);
  render(<App />);
  screen.debug();
});
