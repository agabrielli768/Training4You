import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Registration from "../src/pages/Registration";

jest.mock("axios");

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const updateInputValue = (id, value) => {
  fireEvent.change(screen.getByTestId(id), {
    target: {
      value: value,
    },
  });
};

describe("Test register", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    axios.post.mockClear();
  });

  test("should register the user into the app", async () => {
    // GIVEN
    render(
      <Router>
        <Registration />
      </Router>
    );
    axios.post.mockResolvedValueOnce({ data: { token: "abcd" } });

    // WHEN
    updateInputValue("lastname", "lennon");
    updateInputValue("firstname", "John");
    updateInputValue("email", "john.lennon@beatles.com");
    updateInputValue("password", "letitbe");
    updateInputValue("confirm_password", "letitbe");
    fireEvent.click(screen.getByRole('button', { name: /Creez votre compte/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/auth/register", {
      firstName: "John",
      lastName: "Lennon",
      email: "john.lennon@beatles.com",
      password: "letitbe",
    });
  });
});
