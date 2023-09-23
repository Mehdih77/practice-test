import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

test("typing email", () => {
  render(<Contact />);
  userEvent.type(screen.getByRole("textbox"), "test@gmail.com");
  expect(screen.getByRole("textbox")).toHaveValue("test@gmail.com");
});

// test("submit email successfully", async () => {
//   render(<Contact />);

//   //! type => this event used for input forms
//   userEvent.type(screen.getByRole("textbox"), "test@gmail.com"); // in here we think user typed "test@gmail.com" in input
//   userEvent.click(screen.getByRole("button")); // user sumbit form

//   // wait for see and show alert in html codes
//   await screen.findByRole("alert");

//   // then we expect to see this
//   expect(screen.getByRole("alert")).toHaveTextContent("Success");
//   expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
// });

test("pass function from props", async () => {
  const onSave = jest.fn();

  render(<Contact onSave={onSave} />);
  userEvent.type(screen.getByRole("textbox"), "test@gmail.com");
  userEvent.click(screen.getByRole("button"));

  await screen.findByRole("alert");

  expect(screen.getByRole("alert")).toHaveTextContent("Success");
  expect(screen.getByRole("textbox")).toBeEmptyDOMElement();
  expect(onSave).toHaveBeenCalledTimes(1);
  expect(onSave).toBeCalledWith({ email: "test@gmail.com" });
  //   expect(onSave).toBeCalledWith(
  //     expect.objectContaining({
  //       email: "test@gmail.com",
  //     })
  //   );
});
