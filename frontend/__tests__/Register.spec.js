import { jest } from "@jest/globals";
import Registration from "../src/pages/Registration";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
jest.mock("axios");

const updateInputValue = (id, value) => {
  fireEvent.change(screen.getByTestId(id), {
    target: {
      value: value,
    },
  });
};

describe("Test register", () => {
  test("should register the user into the app", () => {
    // GIVEN
    // Affichage de la page d'inscription
    render(<Registration />);
    axios.post.mockResolvedValueOnce({ token: "abcd" });

    // WHEN
    updateInputValue("lastname", "lennon");
    updateInputValue("firstname", "John");
    updateInputValue("email", "john.lennon@beatles.com");
    updateInputValue("password", "letitbe");
    updateInputValue("confirm_password", "letitbe");
    fireEvent.submit(screen.getByTestId("register-form"));

    // THEN
    expect(mockuseNavigate).toHaveBeenCalled("/dashboard");
  });
});
