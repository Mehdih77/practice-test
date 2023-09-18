import { render, screen } from "@testing-library/react";
import App from "./App";

test("First Test", () => {
  //  const { debug, container } = render(<App />);
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /fruit form/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("textbox", {
      name: /first name/i,
    })
  ).toBeInTheDocument();

  expect(screen.getAllByText(/fruit/i)).not.toBeNull();
});
