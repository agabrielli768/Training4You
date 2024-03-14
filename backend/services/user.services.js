"use_strict"
const userRepository = require("../repositories/user.repository");

// Cette Méthode verifie si l'utilisateur est déjà inscrit
const isRegistered = async(email) => {
  try {
    const user = await userRepository.getUserByEmail(email);
    return user.length !== 0 ? user[0] : null;
  } catch (error) {
    return undefined;
  }
}

const createUser = async (firstName, lastName, email, hash) => {
  try {
    return userRepository.addUser(firstName, lastName, email, hash);
  } catch (error) {
    console.log(error)
    return null;
  }
}

module.exports = {
  isRegistered,
  createUser
}