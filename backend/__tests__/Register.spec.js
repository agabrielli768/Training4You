import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import Login from "../../frontend/src/pages/Login";
import Registration from "../../frontend/src/pages/Registration";


describe ("Registration", () => {

  it ("should register the user and at the same time log the user into the app", () => {
    //GIVEN
    const registration = ;
    //WHEN

    //THEN
  })
})

// const server = setupServer(
//   rest.post("http://localhost:3001/auth/login", (req, res, ctx) => {
//     return res(
//       ctx.json({
//         token: "TOKEN",
//       })
//     );
//   })
// );

// beforeAll(() => server.listen());

// afterAll(() => server.close());

// test("It should log the user into his account ", () => {
//   render(<Login />, { wrapper: MemoryRouter });
//   const linkElement = screen.getByText(/login/i);
//   expect(linkElement).toBeInTheDocument();
// });
