// import { render, screen } from "@testing-library/react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Post from "./Post";

//! This is a mock server
const server = setupServer(
  rest.get("/post/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        title: "Sample Title",
        body: "Sample Body",
      })
    );
  })
);

beforeAll(() => server.listen()); // run server
afterEach(() => server.resetHandlers()); // reset side-effects
afterAll(() => server.close()); // stop server

test("load and display post api", async () => {
  render(<Post url="/post/2" />);

  // do the click handler
  fireEvent.click(
    screen.getByRole("button", {
      name: /load/i,
    })
  );

  // in here we wait for the action to execute
  //! 1
  await waitFor(() => {
    screen.getAllByRole("heading");
  });

  //! 2
  //   await screen.findByRole("heading");
  //! 3
  //   await waitForElementToBeRemoved(() =>
  //     screen.queryAllByRole("button", {
  //       name: /loading/i,
  //     })
  //   );

  // then in here we should see the response
  expect(screen.getByRole("heading")).toHaveTextContent("Sample Title");
  expect(screen.getByRole("article")).toHaveTextContent("Sample Body");
  expect(screen.getByRole("button", { name: /load/i })).toBeInTheDocument();
  //   screen.debug();
});

test("show alert error", async () => {
  render(<Post />);

  fireEvent.click(screen.getByRole("button", { name: /load/i }));

  await screen.findByRole("alert");

  expect(screen.getByRole("alert")).toHaveTextContent("Error in loading post!");
});

test("show alert error from server response", async () => {
  //! use for handle mock error from server
  server.use(
    rest.get("/post/:id", (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          error: "Not Found 404",
        })
      );
    })
  );

  render(<Post url="/post/0" />);

  fireEvent.click(screen.getByRole("button", { name: /load/i }));

  await screen.findByRole("alert");

  expect(screen.getByRole("alert")).toHaveTextContent("Not Found 404");
});
