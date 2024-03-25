const each = require("jest-each").default;
const userRepository = require("../repositories/user.repository");
const userService = require("../services/user.services");

jest.mock("../repositories/user.repository");

describe("Registration", () => {
  test("it should check user", () => {
    // GIVEN
    const mockUser = {
      id: 1,
      name: "toto",
      email: "toto@toto.fr",
    };
    userRepository.getUserByEmail.mockResolvedValue([mockUser]);

    // WHEN
    const isRegistered = userService.isRegistered("toto@toto.fr");
    // THEN

    return expect(isRegistered).resolves.toBe(mockUser);
  });

  test("it should check user null", () => {
    // GIVEN
    userRepository.getUserByEmail.mockResolvedValue([]);

    // WHEN
    const isRegistered = userService.isRegistered("toto@toto.fr");
    // THEN

    return expect(isRegistered).resolves.toBe(null);
  });

  test("it should get id when user created", () => {
    // GIVEN
    const isUserMocked = 1234;
    userRepository.addUser.mockResolvedValue(isUserMocked);

    // WHEN
    const idUser = userService.createUser(
      "toto",
      "toto",
      "toto@toto.fr",
      "toto"
    );
    // THEN

    return expect(idUser).resolves.toBe(isUserMocked);
  });
});
