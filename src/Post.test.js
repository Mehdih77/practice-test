// import { render, screen } from "@testing-library/react";
//! This is a mock server
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(() => {
  rest.get("/post/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        title: "Sample Title",
        body: "Sample Body",
      })
    );
  });
});

beforeAll(() => server.listen()); // run server
afterEach(() => server.resetHandlers()); // reset side-effects
afterAll(() => server.close()); // stop server
